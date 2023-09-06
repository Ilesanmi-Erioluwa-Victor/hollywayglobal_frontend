export class Util {
  static baseUrl: 'https://hollywayglobadb.onrender.com/api/v1';

  static Header() {
    return {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }
}
