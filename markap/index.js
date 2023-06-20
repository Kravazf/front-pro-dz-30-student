// Вам потрібно зробити конструктор сутності "Студент".

// Студент має ім'я, прізвище, рік народження — це властивості. Є масив з оцінками, це також властивість. І є можливість отримати вік студента та його середній бал – це методи.

// Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, спочатку він не заповнений, але на 25 елементів. Це масив, в якому відзначається відвідуваність, щоразу коли ми викликаємо метод .present() на чергове порожнє місце, в масив записується true, коли викликаємо .absent() - записується false. Передбачте будь-який захист від того, щоб у масиві відвідуваності не могло бути більше 25 записів. Масив – це властивість, present та absent – ​​методи.

// Останній метод: .summary(), перевіряє середню оцінку і середнє відвідування(кількістьВідвідин/кількістьЗанять), і якщо середня оцінка більше 90, а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!", якщо одне з цих значень менше , то - "Добре, але можна краще ", якщо обидва нижче - "Редиска!".

// Не забудьте після того, як напишите цей конструктор, створити 2-3 екземпляри (конкретних студентів) і показати використання цих методів.

// class Student {
//   constructor(firstName, lastName, birthYear) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthYear = birthYear;
//     this.gradesArray = [];
//     this.attendanceArray = Array(25).fill(null);
//   }

//   getAge() {
//     const currentYear = new Date().getFullYear();
//     return currentYear - this.birthYear;
//   }

//   getAverageGrade() {
//     if (this.gradesArray.length === 0) {
//       return 0;
//     }

//     const sum = this.gradesArray.reduce((accumulator, grade) => accumulator + grade, 0);
//     return sum / this.gradesArray.length;
//   }

//   present() {
//     const index = this.attendanceArray.findIndex((value) => value === null);
//     if (index !== -1) {
//       this.attendanceArray[index] = true;
//     }
//   }

//   absent() {
//     const index = this.attendanceArray.findIndex((value) => value === null);
//     if (index !== -1) {
//       this.attendanceArray[index] = false;
//     }
//   }

//   summury() {
//     const averageGrade = this.getAverageGrade();
//     const attendanceRatio = this.attendanceArray.filter((value) => value === true).length / this.attendanceArray.length;

//     if (averageGrade >= 90 && attendanceRatio > 0.9) {
//       return '"Well done!"';
//     } else if (averageGrade >= 90 || attendanceRatio > 0.9) {
//       return '"Good, but it can be better!"';
//     } else {
//       return '"Radise!"';
//     }
//   }
// }

// const student1 = new Student("Boris", "Jonson", 2000);
// student1.gradesArray = [90,90,100,98];
// student1.present();
// student1.present();
// student1.present();
// student1.present();
// student1.present();
// student1.present();
// student1.present();
// student1.present();
// student1.present();
// student1.present();
// student1.present();
// student1.present();
// student1.present();
// student1.present();
// student1.present();
// student1.present();
// student1.present();
// student1.present();
// student1.present();
// student1.present();
// student1.present();
// student1.present();
// student1.present();
// student1.present();
// student1.present();

// const student2 = new Student("Ivan", "Ivanov", 2001);
// student2.gradesArray = [50,65,70,97];
// student2.present();
// student2.absent();
// student2.absent();
// student2.present();


// console.log(student1.getAge());
// console.log(Math.round(student1.getAverageGrade()));
// console.log(student1.summury());

// console.log(student2.getAge());
// console.log(Math.round(student2.getAverageGrade()));
// console.log(student2.summury());


class Student {
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.gradesArray = [];
    this.attendanceArray = Array(25).fill(null);
    this.attendanceCounter = 0;
  }

  getAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }

  getAverageGrade() {
    if (this.gradesArray.length === 0) {
      return 0;
    }

    const sum = this.gradesArray.reduce((accumulator, grade) => accumulator + grade);
    return sum / this.gradesArray.length;
  }

  present() {
    if (this.attendanceCounter < 25) {
      this.attendanceArray.push(true);
      this.attendanceCounter++;
    }
  }

  absent() {
    if (this.attendanceCounter < 25) {
      this.attendanceArray.push(false);
      this.attendanceCounter++;
    }
  }

  summary() {
    const averageGrade = this.getAverageGrade();
    const attendanceRatio = this.attendanceCounter / this.attendanceArray.length;

    return averageGrade >= 90 && attendanceRatio > 0.9
      ? "Молодець!"
      : averageGrade >= 90 || attendanceRatio > 0.9
      ? "Добре, але можна краще"
      : "Редиска!";
  }
}

const student1 = new Student("Boris", "Jonson", 2000);
student1.gradesArray = [90, 90, 100, 98];

student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.present();
student1.absent();
student1.absent();
student1.absent();

const student2 = new Student("Ivan", "Ivanov", 2001);
student2.gradesArray = [50, 65, 70, 97];
student2.present();
student2.absent();
student2.absent();
student2.present();

console.log(student1.getAge());
console.log(Math.round(student1.getAverageGrade()));
console.log(student1.summary());

console.log(student2.getAge());
console.log(Math.round(student2.getAverageGrade()));
console.log(student2.summary());