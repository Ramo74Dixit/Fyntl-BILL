import React from "react";
import EWayBill from "./EWayBill"; 

const billData = {
  docType: "INV",
  docNo: "ebill/06/2020",
  docDate: "05/02/2020",
  fromGstin: "05AAACH6188F1ZM",
  fromTrdName: "welton",
  fromAddr1: "2ND CROSS NO 59 19 A",
  fromAddr2: "GROUND FLOOR OSBORNE ROAD",
  fromPlace: "FRAZER TOWN",
  fromPincode: 263652,
  toGstin: "05AAACH6886N1Z0",
  toTrdName: "sthuthya",
  toAddr1: "Shree Nilaya",
  toAddr2: "Dasarahosahalli",
  toPlace: "Beml Nagar",
  toPincode: 263680,
  totalValue: 56099,
  cgstValue: 150.34,
  sgstValue: 150.34,
  igstValue: 0,
  cessValue: 400.56,
  cessNonAdvolValue: 400,
  totInvValue: 57200.24,
  transMode: "Road",
  transDistance: "67",
  transporterName: "",
  transporterId: "05AAACG0904A1ZL",
  transDocNo: "12",
  transDocDate: "",
  vehicleNo: "APR3214",
  vehicleType: "R",
  itemList: [
    {
      productName: "Wheat",
      productDesc: "Wheat",
      hsnCode: 1001,
      quantity: 4,
      qtyUnit: "BOX",
      taxableAmount: 56099,
      sgstRate: 1.5,
      cgstRate: 1.5,
      igstRate: 0,
      cessRate: 0,
    },
  ],
  ewayBillNo: "4014 5396 0082",
  generatedDate: "24/06/2024 04:22 PM",
  generatedBy: "09CYL PR677 4F1ZN",
  validUpto: "25/06/2024",
  transactionTypeDesc: "Outward - Supply",
};

const App = () => {
  return (
    <div className="App">
      <EWayBill billData={billData} />
    </div>
  );
};

export default App;
