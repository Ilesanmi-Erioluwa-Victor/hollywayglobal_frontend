export class Util {
  static baseUrlDev: 'http://localhost:8080/api/v1/';

  static baseUrlProd: 'https://hollywayglobadb.onrender.com/api/v1';

  static Header() {
    return {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }
}
