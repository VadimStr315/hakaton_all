export const params = {
    projectState: process.env.NODE_ENV === 'development' ? 0 : 1,
    //staticServer: 'http://static.learnis.ru/',
    //staticServer: 'https://learnis.hb.bizmrg.com/',
  };

export const dbTestString = 'mongodb+srv://questintext:admin123admin@cluster0.j3qnnqz.mongodb.net/?retryWrites=true&w=majority';
export const dbDeployedString = 'mongodb+srv://questintext:admin123admin@cluster0.j3qnnqz.mongodb.net/?retryWrites=true&w=majority';

export const dbTest = 'testdb';
export const dbDeployed = 'testdb';