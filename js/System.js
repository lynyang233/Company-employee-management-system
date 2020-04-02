/**
 * Cola公司的雇员分为以下若干类：
 * (1) ColaEmployee ：这是所有员工总的父类，属性：员工的姓名,员工的生日月份。
 * 方法：getSalary(month) 根据参数月份来确定工资，如果该月员工过生日，则公司会额外奖励100 元。
 * (2) SalariedEmployee ： ColaEmployee 的子类，拿固定工资的员工。属性：月薪
 * (3) HourlyEmployee ：ColaEmployee 的子类，按小时拿工资的员工，每月工作超出160 小时的部分按照1.5 倍工资发放。
 * 属性：每小时的工资、每月工作的小时数
 * (4) SalesEmployee ：ColaEmployee 的子类，销售人员，工资由月销售额和提成率决定。属性：月销售额、提成率
 * (5) 定义一个类Company，在该类中写一个方法，调用该方法可以打印出某月某个员工的工资数额，写一个测试类TestCompany,把若
 * 干各种类型的员工放在一个ColaEmployee 数组里，并列出数组中每个员工当月的工资。
 */
var prompt = require("prompt-sync")()

class ColaEmployee {
    constructor(name, birthMonth) {
        this.name = name
        this.birthMonth = birthMonth
        this.Msalary = 0
    }
    getSalary(month) {
        this.Msalary = 0
        if (month == this.birthMonth) {
            this.Msalary = this.salary + 100
            return this.Msalary
        } else {
            return this.Msalary = this.salary
        }
    }
}
class SalariedEmployee extends ColaEmployee {
    constructor(name, birthMonth, salary) {
        super(...arguments)
        this.salary = parseInt(salary)
    }

}
class HourlyEmployee extends ColaEmployee {
    constructor(name, birthMonth, salaryH, workHour) {
        super(...arguments)
        if (workHour < 160) {
            this.salary = salaryH * workHour
        } else {
            this.salary = salaryH * 160 + salaryH * 1.5 * (workHour - 160)
        }
    }

}
class SalesEmployee extends ColaEmployee {
    constructor(name, birthMonth, saleNum, profit) {
        super(...arguments)
        this.salary = saleNum * profit + 2000
    }

}
class TestCompany {
    constructor() {
        this.ColaEmployee = []
    }
    showSalary(month) {
        console.info("====全部员工本月工资如下====")

        for (let i = 0; i < this.ColaEmployee.length; i++) {
            this.ColaEmployee[i].getSalary(month)
            console.info("    " + this.ColaEmployee[i].name + ",本月工资：" + this.ColaEmployee[i].Msalary)
        }
        console.info("============================")
    }
}
class Company {
    constructor(name) {
        this.name = name
            // this.emps = []
    }
    showSalaryByMonth() {
        let inputMonth = prompt("请输入您要打印的月份:")
        let empName = prompt("请输入员工姓名：")
        for (let i = 0; i < tcom.ColaEmployee.length; i++) {
            if (empName == tcom.ColaEmployee[i].name) {
                tcom.ColaEmployee[i].getSalary(inputMonth)
                console.info(tcom.ColaEmployee[i].name + "," + inputMonth + "月工资为：" + tcom.ColaEmployee[i].Msalary)
            }
        }
        console.info("============================")
    }
}
var salarE1 = new SalariedEmployee("Alen", "5", "5000")
var salarE2 = new SalariedEmployee("Emma", "3", "6000")
var hourE1 = new HourlyEmployee("Kiki", "7", 20, 170)
var hourE2 = new HourlyEmployee("Dave", "12", 22, 150)
var saleE1 = new SalesEmployee("King", "1", 5000, 0.5)
var saleE2 = new SalesEmployee("Lisa", "9", 6000, 0.6)
var tcom = new TestCompany("坑人公司")
var com = new Company("坑人公司")
tcom.ColaEmployee.push(salarE1)
tcom.ColaEmployee.push(salarE2)
tcom.ColaEmployee.push(hourE1)
tcom.ColaEmployee.push(hourE2)
tcom.ColaEmployee.push(saleE1)
tcom.ColaEmployee.push(saleE2)
tcom.showSalary("3")
com.showSalaryByMonth()