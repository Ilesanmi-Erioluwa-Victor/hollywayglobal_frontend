export class Util {
  static baseUrlDev: 'https://hollywayglobadb.onrender.com/api/v1';

  static Header() {
    return {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }
}
