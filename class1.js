// function letterValue(str){
//     var anum={
//         a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, 
//         l: 12, m: 13, n: 14,o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, 
//         u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
//     }
//     if(str.length== 1) return anum[str] || ' ';
//     return str.split('').map(letterValue);
//    console.log(str)
// }
// letterValue('zoo')


// function alphabetPosition(text) {
//     text.split(' ').join('');
//     var chari = "";
//     var arr = [];
//     var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
//     for(var i = 0; i < text.len; i++){
//       chari = text.charAt(i).toLowerCase();
//       if(alphabet.indexOf(chari) > -1){
//         arr.push(alphabet.indexOf(chari));
//       }
//     }
//     return arr;
//   }
//   console.log(alphabetPosition("a"));
//   alphabetPosition("a")


//  65 - 91 =ABC capital letter
//     97 - 122= abc  small letter
 
 /*function alphabetPosition(text) {
    var result = "";
    for (var i = 0; i < text.length; i++) {
      var code = text.toUpperCase().charCodeAt(i)
      if (code > 64 && code < 91) result += (code - 64) + " ";
    }
   // return result.slice(0, result.length - 1);
    return result
  }
  console.log(alphabetPosition("The sunset sets at twelve o' clock."));*/



  // function Myletter(text){
//  let result=""
//  return result
// }
// console.log(Myletter("I am a boy"))

// function myLetter(text){
//     result = ""
//     for(i=0;i<text.length;i++){
//         code=text.toUpperCase().charCodeAt(i)
//         if(code>64 && code<91)
//         result += (code - 64) + ""
//     }
//     return result
// }
// console.log(myLetter("This is the day the lord has made"))


// const model=(n)=>{
//     const xx = []
// }
// const module2 =(text)=>{
//     const x= text.split("")
//     const xx = []
//     for (y of x){
//         xx.push(y.length)
//     }
//     console.log(xx)
//     Math.min(...xx)
// }
// module2("am am am boy")


class LinkedList{
    constructor(){
this.head = null
this.tail = null
    }
    append(value){
    let Node = {Value: value, next: null};
    if(this.tail.next){
        this.tail.next=Node
    }
    this.tail=Node;
    if (this.tail){
        this.head=Node
    }
    }
    prepend(value){
        let Node ={value:value, next:this.head};
        if(this.head){
            this.head=Node
        }
    }

    remove(value){
        if(!this.head){
            return;
        }
        while(this.head && this.head.value===value){
            this.head.next=this.head
        }

        let Node=this.head
        while(Node.next){
            if(Node.next.value===value){
                Node.next=Node.next.next.next
            }
        }
    }
    print(){
        let element =[]
        let Node = this.tail;

        while(Node){
            element.push(Node)
            Node = Node.next;
        }
    }
}
const build = new LinkedList()
build.append("Hello");
build.append("from");
build.append("codelab");
build.append("set05");
build.append("toheeb");


// link list allow to add as many file as possible unlike array



    