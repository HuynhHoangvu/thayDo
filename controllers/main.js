import {ListChousen} from "../models/ListChosen.js";
import { renderNapbills,showItems } from "../utils/callData.js";
let listData = new ListChousen();
fetch('/data/Data.json')
    .then(respone => respone.json())//chuyển Dữ liệu thành JavaScript
    .then(data =>{
        // Dữ liệu được lấy
        listData.arrNapbills = data.navPills;
        listData.tabPanes = data.tabPanes;
        renderNapbills(listData.arrNapbills);
        showItems('tabTopClothes',listData,'topclothes','handbag__items_1');
        showItems('tabBotClothes',listData,'botclothes','feet__items_1');
        showItems('tabShoes',listData,'shoes','feet__items_2');
        showItems('tabHandBags',listData,'handbags','handbag__items_2');
        showItems('tabNecklaces',listData,'necklaces','necklace');
        showItems('tabHairStyle',listData,'hairstyle','hairstyle__items');
        showItems('tabBackground',listData,'background','background');
    })
    .catch(error =>{
        console.log("Error",error);
    })