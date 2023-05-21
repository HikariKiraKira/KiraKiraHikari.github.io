// JavaScript部分
// 获取小滑块元素
var piece = document.querySelector(".piece");

// 获取所有菜单项元素
var navItems = document.querySelectorAll(".header_navitem");

// 定义一个数组，存储每个菜单项的左边距
var lefts = [];

// 遍历所有菜单项，计算并保存它们的左边距
for (var i = 0; i < navItems.length; i++) {
 // 获取当前菜单项的宽度
 var width = navItems[i].offsetWidth;

 // 获取当前菜单项的左偏移量
 var offsetLeft = navItems[i].offsetLeft;

 // 计算当前菜单项的左边距，即左偏移量加上宽度的一半减去小滑块宽度的一半
 var left = offsetLeft + width / 2 - piece.offsetWidth / 2;

 // 将左边距保存到数组中
 lefts.push(left);

 // 给每个菜单项添加点击事件监听器
 navItems[i].addEventListener("click", function () {
   // 移除所有菜单项的选中样式
   for (var j = 0; j < navItems.length; j++) {
     navItems[j].classList.remove("header_navitem_focus");
   }

   // 给当前点击的菜单项添加选中样式
   this.classList.add("header_navitem_focus");

   // 获取当前点击的菜单项的索引值，用于从数组中取出对应的左边距
   var index = this.dataset.index;

   // 修改小滑块的left属性，使其移动到当前点击的菜单项下方
   piece.style.left = lefts[index] + "px";
 });
}
