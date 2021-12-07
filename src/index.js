// const val4 = {
//   name: "je",
//   age: 28,

// };

// val4.name = "jak";

// val4.adress = "hirosima";

// console.log(val4);

// const val5 = ['dog','cat'];
// val5[0] = 'bird';
// val5.push("monkey");
// console.log(val5);

// テンプレート文字列
// const name = "じゃけぇ";
// const age = 28;

// const message1 = "私の名前は"+name+"です。年齢は"+age+"歳です。"

// // テンプレート文字列
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;

// console.log(message2);

// アロー関数

// 従来
// function func1(str){

//   return str;
// }
// const func1 = function(str){
//   return str;
// }
// console.log(func1("うんこちゃん"));

// アロー関数では
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) =>{
//   return num1 + num2;
// }

// console.log(func3(2,3));

// 分割代入
// const myProfile = {
//   name:"げんち",
//   age:22
// }

// const message1 = `名前は${myProfile.name}です。${myProfile.age}歳です。`;
// console.log(message1);

// const {name,age} = myProfile;
// const message2 = `名前は${name}です。${age}歳です`;
// console.log(message2);

// const myProfile = ['げんち','28'];

// const message3 = `名前は${myProfile[2]}です。${myProfile[1]}歳です。`;
// console.log(message3);

// const [name,age] = myProfile;
// const message4 = `名前は${name}です。${age}歳です`;
// console.log(message4);

// デフォルト値
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん!`);

// sayHello("げんち");

/**
 * スプレッド構文
 */
// 配列の展開
// const arr1 = [1,2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);

// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1,2,3,4,5];
// const [num1,num2, ...arr3] = arr2;

// console.log(num1);
// console.log(num2);
// console.log(arr3);

// 配列のコピー結合
// const arr4 =[10,20];
// const arr5 = [30,40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4,...arr5];
// console.log(arr7);

/**
 * mapやfilterを使った処理
 */
const nameArr = ["田中", "山田", "げんち"];
// for(let i = 0; i<nameArr.length; i++){
//   console.log(nameArr[i]);
// }

// const nameArr2 = nameArr.map((name)=>{
//   return name;
// })
// console.log(nameArr2);

// nameArr.map((name, i)=>console.log(`${i}番目は${name}です`));

// filter

// const numArr = [1,2,3,4,5];
// const newNumArr = numArr.filter((num)=>{
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// 実際的なmap
// 名前が”げんち”いがいなら”さん”を付けて返す
// const newNameArr = nameArr.map((name)=>{
//   if(name === "げんち"){
//     return name;
//   }else{
//     return `${name}さん`
//   }
// })
// console.log(newNameArr);

/**
 * 三項演算子
 */
// const val1 = 1> 0 ? 'tureです。' : 'falseです';
// console.log(val1);

// const num = "1300";

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : "数字を入力してください";
// console.log(formattedNum);

// 関数のリターンに三項演算子を使う例
// const checkSum = (num1,num2) =>{
//   return num1 + num2 > 100? '100ッを超えています': '許容範囲内です';
// }
// console.log(checkSum(50,40));

/**
 * 論理演算子の本当の意味を知ろう
 */
// const flag1 = true;
// const flag2 = true;

// if(flag1 || flag2){
//   console.log("1か2はtrueになります")
// }
// if(flag1 && flag2){
//   console.log("1も2もtrueになります")
// }

// const num = 100;
// const fee = num || "金額未設定です"
// console.log(fee);

// &&は左がtrueなら右を返す。

// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2)
