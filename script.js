var categorise = ["select a Category","Electronic","Footwear","Fashion"];
				var electronics = ["Select Electronic product","JBL Speaker","EarPods"];
				var footwear = ["Select Footwear","Nike Casuals","Lee Cooper Boots"];
				var fashion = ["Select Fashion","Shirt","jeans"];
				var products = [];

				

				var data = [
					{Name:"JBL Speaker",Prize:1348.14,
					 Desp:"The JBL Speaker is a stylish, portable, and powerful water- and dust-resistant Bluetooth speaker that lets you enjoy high-quality JBL sound on the move. This IP67-rated speaker features Bluetooth 5.1 for quick pairing, up to 5 hours of playback time, and a Portable Design to carry it conveniently",
					 photo:"assects/speaker.png"},

					{Name:"Nike Casuals",Prize:1048.14,
					 Desp:"Brand - La Intimo Style - Men full sleeves Shirt + Pyjama with 2 side pockets. Fabric - Manufactured with 100% cotton fabric material, The Relaxed Checker Pyjama Shirt set for men is an exceptional comfort wear to buy.",
					photo:"assects/sweatshirt.png"},

					{Name:"Lee Cooper Boots",Prize:1548.14,
					  Desp:"Capture a smart look when you lace up this pair of casual shoes from the house of Rebelbe. Experience blissful comfort when you wear this pair of shoes, which is crafted using comfortable airmix soles.",
					photo:"assects/boot.png"},

					{Name:"Shirt",Prize:1048.14,
					  Desp:"Surhi presents to you a new range of stylish and cool new shirts yet which are affordable for everyone. This fashionable and stylish Surhi men shirt makes your look cool and attractive.",
						photo:"assects/shirt.png"},

					{Name:"jeans",Prize:1548.14,Desp:"Machine wash cold, wash dark colors separately,Fabric:Cotton Stretch",
					photo:"assects/jeans.png"},

					{Name:"EarPods",Prize:1048.14,
					  Desp:"The boAt Airdopes 131 that comes with a carrying case. This carrying case also acts as a 650 mAh portable charger that extends the playback time of these earbuds by up to 15 hours, i.e. 4 times its normal charging capacity.",
						photo:"assects/earphone.png"}
					];


				var cartItems=[];

				function GetCartItemsCount(){
					document.getElementById("lblCount").innerHTML=cartItems.length;
				}

				function AddToCartClick(){
					cartItems.push(searchedProduct);
					GetCartItemsCount();
					LoadCartItems();
					swal("Good Choice!", " Item added to cart.!", "success");
				}

				function LoadCategories() {
					
					var lstCategories = document.getElementById("lstCategories");
					for (var item of categorise)
					{
						var option = document.createElement("option");
						option.text=item;
						option.value=item;
						lstCategories.appendChild(option);
					}
				}

				function LoadProducts(){
					var lstProducts = document.getElementById("lstProducts");
					lstProducts.innerHTML="";
					for(var item of products)
					{
						var option = document.createElement("option");
						option.text=item;
						option.value=item;
						lstProducts.appendChild(option);
					}
				}

				function ProductChanged(){
					var productName = document.getElementById("lstProducts").value;
					// console.log(productName);
					searchedProduct= data.find(function(item){
						return item.Name==productName;
					});
					//console.log(searchedProduct);

					document.getElementById("lblName").innerHTML=searchedProduct.Name;
					document.getElementById("lblDesp").innerHTML=searchedProduct.Desp;
					document.getElementById("lblPrice").innerHTML="&#8377;" + searchedProduct.Prize;
					document.getElementById("imgProduct").src=searchedProduct.photo;
				
				}

				function LoadCartItems(){
					var tbody =document.getElementById("tbody");
					tbody.innerHTML="";
					for(var item of cartItems)
					{
						var tr =document.createElement("tr");
						var tdName =document.createElement("td");
						var tdPrize =document.createElement("td");
						
						var tdphoto =document.createElement("td");

						tdName.innerHTML=item.Name;
						tdPrize.innerHTML=item.Prize;
						

						var img =document.createElement("img");
						img.src=item.photo;
						img.width=50;
						img.height=50;

						tdphoto.appendChild(img);

						tr.appendChild(tdName);
						tr.appendChild(tdPrize);
						
						tr.appendChild(tdphoto);

						tbody.appendChild(tr);
					}
				}


				function bodyload(){
					LoadCategories();
					GetCartItemsCount();
				}

				function CategoryChanged(){
					var selectedCategory=document.getElementById("lstCategories").value;
					//console.log(selectedCategory);

					switch(selectedCategory)
					{
						case "Electronic":
						products = electronics;
						LoadProducts();
						break;

						case "Footwear":
						products = footwear;
						LoadProducts();
						break;

						case "Fashion":
						products = fashion;
						LoadProducts();
						break;

						default:
						products=["Please Select Category"];
						break;
					}
				}

				function OrderPlaced(){

					swal("Order Placed!", "Thanks For Shopping.!  Visit Again..!!", "success");
				}