import { delay } from "@/src/delay";
export const content = {
  "/": async () => {
    await delay(1000);
    return `
      <h1>Welcome to Our Website</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat justo at felis consectetur, non laoreet libero interdum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus feugiat dui id dolor facilisis, a efficitur velit dapibus.</p>
    `;
  },
  "/about": async () => {
    await delay(2000);
    return `
      <h1>About Us</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula justo ac sapien cursus, sed commodo risus dignissim. Mauris nec dignissim orci. Nullam vehicula, ex et bibendum vestibulum, eros mi lacinia risus, ac posuere ligula nunc ac purus. Suspendisse potenti. Vivamus nec urna quis leo convallis gravida. Integer at congue felis. Nulla facilisi.</p>
      <h2>Our Mission</h2>
      <p>Curabitur tincidunt magna et velit tincidunt, in facilisis turpis ullamcorper. Vivamus efficitur lectus ac orci commodo, a finibus eros aliquet. Nam tristique semper neque, a volutpat nunc scelerisque in. Donec porttitor felis sed risus fermentum tincidunt. Phasellus semper diam ac ex lacinia, ut dictum mauris dapibus.</p>
      <h2>Our History</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut augue sed erat fermentum dapibus. In vel mauris neque. Etiam posuere, libero nec sodales elementum, erat urna blandit est, eget interdum magna quam at dui. Proin id velit nisl. Donec maximus est non lacus vestibulum, in vehicula leo fermentum.</p>
    `;
  },
  "/contact": async () => {
    await delay(3000);
    return `
      <h1>Contact Us</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id erat vel nisi eleifend dictum. Donec sit amet arcu sit amet magna ultricies ultrices. Phasellus id lacus libero. Fusce euismod quam vel nibh pretium, id facilisis purus vulputate. Maecenas facilisis lacinia mi, non tincidunt risus vulputate et.</p>
      <h2>Get in Touch</h2>
      <p>Phasellus sed sapien nec nulla volutpat fermentum. Duis euismod, libero ac elementum dictum, nisl eros facilisis odio, a tincidunt purus sapien sit amet velit. Praesent a neque at sapien tincidunt faucibus.</p>
      <ul>
      <li>Email: contact@example.com</li>
      <li>Phone: (123) 456-7890</li>
      <li>Address: 123 Main Street, City, Country</li>
      </ul>
    `;
  },
};
