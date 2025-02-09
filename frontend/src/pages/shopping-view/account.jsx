import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import accImg from "../../assets/account.jpg";
import Address from "@/components/shopping-view/address";
import ShoppingOrders from "@/components/shopping-view/orders";

function ShoppingAccount() {
  return (
    <div className="flex flex-col">
      {/* ✅ Same Responsive Code Applied */}
      <div className="relative w-full h-[100px] sm:h-[200px] md:h-[300px] lg:h-[400px] xl:h-[400px] overflow-hidden">
        <img
          src={accImg}
          className={`absolute top-0 left-0 w-full h-full
            max-w-sm:object-cover md:object-contain lg:object-contain xl:object-contain
            transition-opacity duration-1000`}
          alt="Account Banner"
        />
      </div>

      <div className="container mx-auto grid grid-cols-1 gap-8 py-8">
        <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
          <Tabs defaultValue="orders">
            <TabsList>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="address">Address</TabsTrigger>
            </TabsList>
            <TabsContent value="orders">
              <ShoppingOrders />
            </TabsContent>
            <TabsContent value="address">
              <Address />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default ShoppingAccount;
