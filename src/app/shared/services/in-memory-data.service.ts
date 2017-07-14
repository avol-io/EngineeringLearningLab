import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let users = [
      {  
      id:1,
      name:"Fabio",
      surname:"Siliberto",
      email:"fabio.siliberto@eng.it",
      password:"password1",
      venue:"Ponte Galeria (RM)"
    },
    {  
      id:2,
      name:"Alessandro",
      surname:"Avolio",
      email:"alessandro.avolio@eng.it@eng.it",
      password:"password2",
      venue:"Ponte Galeria (RM)"
    },
    {  
      id:3,
      name:"Umberto",
      surname:"Tarantino",
      email:"umberto.tarantino@eng.it",
      password:"password3",
      venue:"Ponte Galeria (RM)"
    },
    {  
      id:4,
      name:"pippo",
      surname:"pluto",
      email:"pp@eng.it",
      password:"p",
      venue:"Ponte Galeria (RM)"
    }
    ];
    return {users};
  }
}