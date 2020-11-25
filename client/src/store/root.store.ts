import ProductStore from "./product.store";
import FilterStore from "./filter.store";
import MailerStore from "./mailer.store";
import CartStore from "./cart.store";
import CategoryStore from "./category.store";
import NotificationsStore from "./notifications.store";

class RootStore {
  productStore: ProductStore;
  filterStore: FilterStore;
  mailerStore: MailerStore;
  cartStore: CartStore;
  categoryStore: CategoryStore;
  notificationsStore: NotificationsStore;

  constructor() {
    this.productStore = new ProductStore(this);
    this.filterStore = new FilterStore(this);
    this.mailerStore = new MailerStore(this);
    this.cartStore = new CartStore(this);
    this.categoryStore = new CategoryStore(this);
    this.notificationsStore = new NotificationsStore(this);
  }
}

export default RootStore;
