import { action, autorun, computed, makeObservable, observable, reaction, when } from "mobx";
import GroceryItemModel from "../../Models/GroceryItemModel";

export class GroceryList {

    @observable
    public items: GroceryItemModel[] = [];

    public constructor() {
        // makeObservable(this, {
        //     items: observable,
        //     addItem: action,
        //     removeItem: action,
        //     clearList: action,
        //     totalItems: computed,
        //     totalAmount: computed
        // });

        makeObservable(this);

        // autorun(() => {
        //     console.log("autorun... item length: " + this.items.length);
        // });

        // reaction(() => {
        //     return this.items.length;
        // }, () => {
        //     console.log("reaction...");
        // });

        // when(() => this.items.length %2 !== 0, () => {
        //     console.log("when...");
        // });


        // autorun(this.loadItems, {onError: () => alert("Error")});
        autorun(this.loadItems);
        reaction(() => this.items.length, this.saveItems);
        when(() => this.items.length > 10, this.displayAngryWifeAlert);

    }

    @action
    public addItem(item: GroceryItemModel): void {
        this.items.push(item);
    }

    @action
    public removeItem(index: number): void {
        this.items.splice(index, 1);
    }

    @action
    public clearList(): void {
        this.items = [];
    }

    @computed
    public get totalItems(): number {
        return this.items.length;
    }

    @computed
    public get totalAmount(): number {
        const sum = this.items.reduce((sum, item) => sum + (+item.amount), 0);
        return sum;
    }

    private loadItems = () => {
        const json = localStorage.getItem("grocery-list");
        this.items = json ? JSON.parse(json) : [];
    }

    private saveItems = () => {
        const json = JSON.stringify(this.items);
        localStorage.setItem("grocery-list", json);
    }

    private displayAngryWifeAlert = () => {
        alert("Your grocery list contain more than 10 items!\nPlease go now so wife won't get angry!");
    }

}

const groceryList = new GroceryList();

export default groceryList;

// // ----------------------------------

// groceryList.items.push({ name: "Bread", amount: 2 });
// groceryList.items.push({ name: "Olive Oil", amount: 1 });
// groceryList.items.push({ name: "Candies", amount: 4 });

// setInterval(() => {
//     groceryList.items.push({ name: "Pizza", amount: 2 });
//     console.log(groceryList.items);
// }, 1000);