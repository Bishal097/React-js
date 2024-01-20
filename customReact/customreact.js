function customrender(relement, container) {
  /*
    const ele = document.createElement(relement.type)
    ele.innerHTML=relement.children
    ele.setAttribute('href', relement.props.href)
    ele.setAttribute('target',relement.props.target)
    container.appendChild (ele)
    */

  const ele = document.createElement(relement.type);
  ele.innerHTML = relement.children;
  for (const prop in relement.props) {
    if (prop == "children") continue;
    ele.setAttribute(prop, relement.props[prop]);
  }
  container.appendChild(ele);
}

const relement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click Me to Visit Google",
};

const maincontainer = document.querySelector("#root");
customrender(relement, maincontainer);
