const loadAllItems = require('./loadAllItems.js');

module.exports = function main() {
    console.log("Debug Info");
    return 'Hello World!';
};

function printInventory(input){
    var item;
    var item_list=[];
    var list='***'<没钱赚商店>购物清单***';
    var sum=0;
    for(let i=0;i<input.length;i++){
        item=input[i];
        if (item_list.length==0){
            item.count=1;
            item_list.push(item);
        }
        else{
            for(let j=0;j<item_list.length;j++){
                if(input[i]=item_list[j])
            }      
        }
    }
    
}

let actualText = printInventory(inputs);



        var expectText =

            '***<没钱赚商店>购物清单***\n' +

            '名称：可口可乐，数量：5瓶，单价：3.00(元)，小计：15.00(元)\n' +

            '名称：雪碧，数量：2瓶，单价：3.00(元)，小计：6.00(元)\n' +

            '名称：电池，数量：1个，单价：2.00(元)，小计：2.00(元)\n' +

            '----------------------\n' +

            '总计：23.00(元)\n' +

            '**********************';
