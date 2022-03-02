var names=["Family Book","Rabi George Mathew","Nissy Elizabeth George","Ray Mathew George", "Rhea Rebecca George"];
var images=["FamilyBook.jpg","dad.jpg","mom.jpg","ray.png","me.jpg"];
var i=0;

function update_images()
{
i++;
var numbers_of_family_member_in_array = 5
if(i > numbers_of_family_member_in_array)
{
i = 0;
}
var updatedImage = images[i];
var updatedName = names[i] ;

document.getElementById("images").src = updatedImage;
document.getElementById("name").innerHTML = updatedName;
}
