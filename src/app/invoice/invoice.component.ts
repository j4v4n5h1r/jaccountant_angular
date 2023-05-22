import { Component, OnInit } from '@angular/core';

interface Invoice {
  id: number;
  name: string;
  type: string;
  percent: number;
  amount: number;
  date: string;
  status: string;
  photo?: string;
}

@Component({
    selector: 'app-invoice',
    templateUrl: './invoice.component.html',
    styleUrls: ['./invoice.component.scss']
})

export class InvoiceComponent implements OnInit {

    invoices: Invoice[] = [];

    constructor() { }

    ngOnInit() {}


    getInvoices() {
      // Get invoices from server
    }

    generateReport(reportType: string) {
      // Generate report
    }

    uploadInvoices() {
    }



  addInvoice(name: string, type: string, percent: number, amount: number, date: string) {
    const id = this.invoices.length + 1;
    const status = 'unpaid';
    this.invoices.push({ id, name, type, percent, amount, date, status });
  }

  markAsPaid(id: number) {
    const invoice = this.invoices.find(invoice => invoice.id === id);
    invoice.status = 'paid';
  }

  getOutstandingInvoices() {
    return this.invoices.filter(invoice => invoice.status === 'unpaid');
  }

  onFileSelected(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const photo = reader.result as string;
      const invoice = this.invoices[this.invoices.length - 1];
      invoice.photo = photo;
    };
    reader.readAsDataURL(file);
  }

}







// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyA0EY4OehnGo3RofMXYIjCw5dtv86ZyRkg",
//   authDomain: "jaccountantserver.firebaseapp.com",
//   projectId: "jaccountantserver",
//   storageBucket: "jaccountantserver.appspot.com",
//   messagingSenderId: "369596427025",
//   appId: "1:369596427025:web:303a4fe93b7ad885833ab0",
//   measurementId: "G-3S8YQ75W41"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);