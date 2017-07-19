const loadAllItems = require('./loadAllItems.js');

module.exports = function main(inputs) {
    var allItems=loadAllItems();
    var nums=[];
    var sum=0;
    var list='***<没钱赚商店>购物清单***\n';
    for(let i=0;i<allItems.length;i++)
        nums[i]=0;
    for(let i=0;i<inputs.length;i++){
        for(let j=0;j<allItems.length;j++){
            if(inputs[i]==allItems[j].barcode)
               nums[j]++;
        }   
    }
    for(let i=0;i<allItems.length;i++){
        if(nums[i]){
            list=list+`名称：${allItems[i].name}，数量：${nums[i]}${allItems[i].unit}，单价：${allItems[i].price.toFixed(2)}(元)，小计：${(nums[i]*allItems[i].price).toFixed(2)}(元)\n`;
            sum=sum+nums[i]*allItems[i].price;
        }
    }
    list=list+'----------------------\n'+`总计：${sum.toFixed(2)}(元)\n`+'**********************';
    return list;
};



       
