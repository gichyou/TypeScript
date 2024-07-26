interface Singable {
    name: string
    sing(): void
}

class Person implements Singable{
    name = 'jack'
    sing(){
        console.log('你是我的小苹果');
        
    }
}

const p = new Person
console.log(p.name);
p.sing()
