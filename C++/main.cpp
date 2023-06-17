#include <iostream>
using std::string;

class AbstractEmployee
{
    virtual void AskForPromotion() = 0;
};

class Employee : AbstractEmployee // Abstract Class
{
private: // Encapsulation
    string Name;
    string Company;
    int Age;

protected:
    string NameProtected;

public: // Encapsulation get and set
    void setName(string name)
    {
        Name = name;
    }
    string getName()
    {
        return Name;
    }
    void setCompony(string company)
    {
        Company = company;
    }
    string getCompany()
    {
        return Company;
    }
    void setAge(int age)
    {
        if (age >= 18)
            Age = age;
    }
    int getAge()
    {
        return Age;
    }
    void IntroduceYourself()
    {
        std::cout << "Name - " << Name << std::endl;
        std::cout << "Company - " << Company << std::endl;
        std::cout << "Age - " << Age << std::endl;
    }
    Employee(string name, string company, int age)
    {
        Name = name;
        Company = company;
        Age = age;
    }
    void AskForPromotion()
    {
        if (Age > 30)
            std::cout << Name << " got promoted" << std::endl;
        else
            std::cout << Name << " not promoted" << std::endl;
    }
    void Work()
    {
        std::cout << Name << " is cheking e-mail" << std ::endl; // Polymorphism
    }
};

class Developer : public Employee
{
public:
    string FavProgrammingLanguage;
    Developer(string name, string company, int age, string favProgrammingLanguage)
        : Employee(name, company, age)
    {
        FavProgrammingLanguage = favProgrammingLanguage;
    }
    void FixBug()
    {
        std::cout << getName() << " fixed bug using " << FavProgrammingLanguage << std::endl;
        std::cout << NameProtected << " fixed bug using " << FavProgrammingLanguage << std::endl; // Protected Name Object
    }
};

class Teacher : public Employee
{
public:
    string Subject;
    void PrepareLesson()
    {
        std::cout << getName() << " is preparing " << Subject << " lesson" << std::endl;
    }
    Teacher(string name, string company, int age, string subject) : Employee(name, company, age)
    {
        Subject = subject;
    }
};

int main()
{
    Employee employee1 = Employee("Melih", "Çözüm", 25);
    employee1.IntroduceYourself();

    Employee employee2 = Employee("Miroş", "Ev", 8);
    employee2.IntroduceYourself();

    employee1.setAge(30);
    std::cout << employee1.getName() << " is " << employee1.getAge() << " years old" << std::endl;
    // Melih is 30 years old

    employee1.AskForPromotion();
    // Melih not promoted

    Developer d = Developer("Melih", "Çözüm", 25, "JS");
    d.FixBug();
    d.AskForPromotion();

    Teacher t = Teacher("İrem", "Kocaeli", 21, "History");
    t.PrepareLesson();
    t.AskForPromotion();

    d.Work();
    t.Work();
}

// g++ -o main main.cpp
// ./main