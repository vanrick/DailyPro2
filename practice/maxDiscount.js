<html onload="alert('test')">
   <head>
      <style>
      body {
         font-family: Arial
      }
      .header {
         font-weight:bold;
         background-color:#63666A;
         color: #CCCCCC
      }
      .subheader {
         color:#43B02A;
         text-decoration: underline
      }
      th {
         color:#43B02A
      }
      </style>
      <script src="jquery-3.2.1.js"></script>
      <script>
      $(document).ready(function() {
          calculate()
      });
      var store = {
        "availableItems": [{
            "id":1,
            "name": "Hamburger",
            "price" : 700
          },{
            "id":2,
            "name": "Cheeseburger",
            "price" : 750
          },{
            "id":3,
            "name": "Chicken Sandwich",
            "price" : 900
          },{
            "id":4,
            "name": "Bacon Cheeseburger",
            "price" : 925
          },{
            "id": 5,
            "name": "Tater Tots",
            "price": 300
          },{
            "id": 6,
            "name": "French Fries",
            "price": 250
          },{
            "id": 7,
            "name": "Iced Tea",
            "price": 129
          },{
            "id": 8,
            "name": "Soda",
            "price": 189
          },{
            "id": 9,
            "name": "Bananas Foster",
            "price": 450
          },
          {
            "id": 10,
            "name": "Brownie Hot Fudge Sundae",
            "price": 475
          },{
            "id": 11,
            "name": "Onion Rings",
            "price": 425
        }],


        "availableDiscounts": [
          {
          "id":"A",
          "categories":["i", "ii", "iii"],
          "discount": 50
        },{
          "id":"B",
          "categories": ["i", "ii", "iii", "iv"],
          "discount": 70
        },{
          "id":"C",
          "categories": ["i", "iii"],
          "discount": 20
        },
          {
            "id": "D",
            "categories": ["i","ii"],
            "discount": 35
          },{
            "id": "E",
            "categories": ["i","i","ii","ii","iii","iii","iv","v"],
            "discount": 115
        }],


        "categories": [{
            "id":"i",
            "name":"Entrees",
            "items":[1,2,3,4]
          },{
            "id": "ii",
            "name": "Sides",
            "items": [5,6]
          },{
            "id": "iii",
            "name": "Drinks",
            "items": [7,8]
          },
          {
            "id": "iv",
            "name": "Desserts",
            "items": [9,10]
          },{
            "id": "v",
            "name": "Appetizers",
            "items": [11]
        }],

        "orders":[
          {
            "id":"0001",
            "items":[
              {"itemId":1, "quantity":1},
              {"itemId":5, "quantity":1},
              {"itemId":2, "quantity":1},
              {"itemId":6, "quantity":1},
              {"itemId":7, "quantity":1},
              {"itemId":8, "quantity":1}
            ]
          },{
            "id":"0002",
            "items":[
              {"itemId":2, "quantity":1},
              {"itemId":2, "quantity":1},
              {"itemId":6, "quantity":1},
              {"itemId":8, "quantity":1},
              {"itemId":9, "quantity":1},
              {"itemId":4, "quantity":1},
              {"itemId":7, "quantity":1}
            ]
          },{
            "id":"0003",
            "items":[
              {"itemId":1, "quantity":1},
              {"itemId":1, "quantity":1},
              {"itemId":2, "quantity":1},
              {"itemId":5, "quantity":1},
              {"itemId":5, "quantity":1},
              {"itemId":6, "quantity":1},
              {"itemId":9, "quantity":1},
              {"itemId":10, "quantity":1},
              {"itemId":10, "quantity":1}
            ]
          },{
            "id":"0004",
            "items":[
              {"itemId":1, "quantity":1},
              {"itemId":2, "quantity":1},
              {"itemId":5, "quantity":1},
              {"itemId":5, "quantity":1},
              {"itemId":7, "quantity":1},
              {"itemId":8, "quantity":1},
              {"itemId":10,"quantity":1},
              {"itemId":11,"quantity":1}
            ]
          }
        ]
     }

         function dumpAvailableItems() {
            var table = $("#itemsTable tbody")

            for (var i=0; i<store.availableItems.length; i++) {
               table.append('<tr><td>'+store.availableItems[i].id+'</td><td>'+store.availableItems[i].name+'</td><td align="right">'+store.availableItems[i].price+'</td></tr>');
            }
         }
         function dumpCategories() {
            var table = $("#categoriesTable tbody")
            for (var i=0; i<store.categories.length; i++) {

               var itemList = ""
               for (var j=0; j<store.categories[i].items.length; j++) {
                  if (j > 0) {
                     itemList += ","
                  }
                  itemList += store.categories[i].items[j]
               }
               table.append('<tr><td>'+store.categories[i].id+'</td><td>'+store.categories[i].name+'</td><td>'+itemList+'</td></tr>');
            }
         }
         function dumpAvailableDiscounts() {
            var table = $("#discountsTable tbody")
            for (var i=0; i<store.availableDiscounts.length; i++) {
               var catList = ""
               for (var j=0; j<store.availableDiscounts[i].categories.length; j++) {
                  if (j > 0) {
                     catList += ","
                  }
                  catList += store.availableDiscounts[i].categories[j]
               }
               table.append('<tr><td>'+store.availableDiscounts[i].id+'</td><td align="right">'+store.availableDiscounts[i].discount+'</td><td>'+catList+'</td></tr>');

            }
         }

         function calculate() {
            dumpAvailableItems()
            dumpCategories()
            dumpAvailableDiscounts()

            updateOrders()
         }

         function updateOrders() {
            var table = $("#ordersTable tbody")
            for (var i=0; i<store.orders.length; i++) {
               var currentOrder = store.orders[i]

               table.append('<tr><td>'+currentOrder.id+'</td><td></td><td></td></tr>');
               for (var j=0; j<currentOrder.items.length; j++) {
                  table.append('<tr><td></td><td align="right">'+currentOrder.items[j].itemId+'</td></tr>');
               }

               computeTotalDiscountForOrder(currentOrder)

               table.append('<tr><td></td><td>discount:</td><td align="right">'+currentOrder.totalDiscount+'</td></tr>');
            }
         }

      </script>
   </head>
   <body>
      <div style="display: inline-block; white-space:nowrap;">
         <table cellpadding="10">
            <tr>
               <td valign="top">
                  <table id="itemsTable" name="itemsTable" border="0">
                     <tr>
                        <td colspan="3" class="header">Available Items</td>
                     </tr>
                     <tr>
                        <th>id</th><th>name</th><th>price</th>
                     </tr>
                  </table>

               </td>
               <td valign="top">
                  <table id="categoriesTable" border="0">
                     <tr>
                        <td colspan="3" class="header">Categories</td>
                     </tr>
                     <tr>
                        <th>id</th><th>name</th><th>items</th>
                     </tr>
                  </table>
               </td>
               <td valign="top">
                  <table id="discountsTable" border="0">
                     <tr>
                        <td colspan="3" class="header">Available Discounts</td>
                     </tr>
                     <tr>
                        <th>id</th><th>discount</th><th>categories</th>
                     </tr>
                  </table>
               </td>
            </tr>
         </table>

      </div>

      <table id="ordersTable" border="0">
         <tr>
            <td colspan="3" class="header">Orders</td>
         </tr>
         <tr>
            <th>id</th><th>item</th><th>discount</th>
         </tr>
      </table>
   </body>
   <script>

      function doesDiscountApply(store){
        var romanOrders = store.orders.map((order)=>{
          return getRomanNumerals(order)
        })
        var discounts = romanOrders.map((romanArray)=>{
          return romanToDiscounts(romanArray)
        })
        return discounts
      }


      function getRomanNumerals(orderObj){
        return orderObj.items.map((item)=>{
          return checkCategories(item.itemId)
        })
      }
      function checkCategories(num){
        for (var i = 0; i < store.categories.length; i++) {
          if (store.categories[i].items.indexOf(num) > -1) {
            return store.categories[i].id
          }
        }
      }
      function romanToDiscounts(romanArray){
        var discounts = store.availableDiscounts.sort((a,b)=>{
          if(a.discount< b.discount) return -1
          if(a.discount> b.discount) return 1
          return 0
        })
        var discount = 0
        var tempArray = romanArray.concat([])
        for (var i = discounts.length-1 ; i >= 0; i--) {
          var afterCheck = checkForMatch(discounts[i].categories, tempArray)
          if(afterCheck.match){
            discount += discounts[i].discount
            tempArray = afterCheck.remainder
            i++
          }
        }
        return discount
      }
      function checkForMatch(discount, roman){
        var testArray = roman.concat([])
        var returnObj = {match:false, remainder:testArray}
        for (var j = 0; j < discount.length; j++) {
          var index = testArray.indexOf(discount[j])
          if (index > -1) {
            testArray.splice(index, 1)
            if (j === discount.length -1) {
              returnObj.match = true
              returnObj.remainder = testArray
              return returnObj
            }
          }else{
            return returnObj
          }

        }
      }
   </script>
</html>
