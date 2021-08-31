import img1 from "./assets/images/11.png";
import img2 from "./assets/images/22.png";
import img3 from "./assets/images/33.png";

import banner1 from "./assets/images/top_banner1.png";
import banner2 from "./assets/images/top_banner2.png";
import banner3 from "./assets/images/top_banner3.png";

import cake4 from "./assets/images/4-300x300.png";
import cake5 from "./assets/images/5-300x300.png";
import cake6 from "./assets/images/6-300x300.png";
import cake7 from "./assets/images/7-145x145.png";
import cake10 from "./assets/images/10-145x145.png";
import cake12 from "./assets/images/12-145x145.png";
import cake16 from "./assets/images/16-145x145.png";
import cake18 from "./assets/images/18-145x145.png";

import pic5 from './assets/images/pic5.jpg';
import pic6 from './assets/images/pic6-355x195_t.jpg';
import pic7 from './assets/images/pic7.jpg';
import pic8 from './assets/images/pic8.jpg';

import {AiOutlineTwitter} from 'react-icons/ai';
import {FaLinkedinIn, FaRss, FaMapMarkerAlt, FaEnvelope, FaYoutube} from 'react-icons/fa';
import {ImPinterest} from 'react-icons/im';
import {MdPhoneIphone} from 'react-icons/md';


const data = {
  slides: [img1, img2, img3],
  banners: [banner1, banner2, banner3],
  tablist: ["featured", "latest", "best seller"],
  contact: [
    {
      title: 'information',
      links: [
        {
          icon: null,
          text: 'store location',
          to: '/'
        },
        {
          icon: null,
          text: 'shipping details',
          to: '/'
        },
        {
          icon: null,
          text: 'track an order',
          to: '/'
        },
        {
          icon: null,
          text: 'affiliate',
          to: '/'
        },
        {
          icon: null,
          text: 'discount on products',
          to: '/'
        },
      ]
    },
    {
      title: 'customer service',
      links: [
        {
          icon: null,
          text: 'customer assistance',
          to: '/'
        },
        {
          icon: null,
          text: 'net transaction',
          to: '/'
        },
        {
          icon: null,
          text: 'delivery information',
          to: '/'
        },
        {
          icon: null,
          text: 'international shipping',
          to: '/'
        },
        {
          icon: null,
          text: 'discount on products',
          to: '/'
        },
      ]
    },
    {
      title: 'follow me',
      links: [
        {
          icon: <AiOutlineTwitter className="widget__icon" />,
          text: 'twitter',
          to: '/'
        },
        {
          icon: < FaLinkedinIn className="widget__icon"/>,
          text: 'linkedin',
          to: '/'
        },
        {
          icon: <FaRss className="widget__icon"/>,
          text: 'RSS',
          to: '/'
        },
        {
          icon: <FaYoutube className="widget__icon" />,
          text: 'youtube',
          to: '/'
        },
        {
          icon: <ImPinterest className="widget__icon"/>,
          text: 'pinterest',
          to: '/'
        },
      ]
    },
    {
      title: 'get in touch',
      links: [
        {
          icon: <FaMapMarkerAlt className="widget__icon align-self-start"/>,
          text: 'Megnor Comp Pvt Limited, 507-Union Trade Centre, Beside Apple Hospital, Udhana Darwaja, Ring Road, Surat, India',
          to: '/'
        },
        {
          icon: <MdPhoneIphone className="widget__icon" />,
          text: '(91)-261 3023333',
          to: '/'
        },
        {
          icon: <FaEnvelope className="widget__icon"/>,
          text: 'support@example.com',
          to: '/'
        },
      ]
    },
  ],
  posts: [
    {
      id: 14371,
      image: pic5,
      postBy: 'admin',
      postDate: '21-10-2021',
      name: 'post format: audio',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing beatae natus rerum officia molestias. Reiciendis, ut. ',

    },
    {
      id: 14372,
      image: pic6,
      postBy: 'admin',
      postDate: '21-10-2021',
      name: 'post format: audio',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing beatae natus rerum officia molestias. Reiciendis, ut. ',

    },
    {
      id: 14373,
      image: pic7,
      postBy: 'admin',
      postDate: '21-10-2021',
      name: 'post format: audio',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing beatae natus rerum officia molestias. Reiciendis, ut. ',

    },
    {
      id: 14374,
      image: pic8,
      postBy: 'admin',
      postDate: '21-10-2021',
      name: 'post format: audio',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing beatae natus rerum officia molestias. Reiciendis, ut. ',

    },
    {
      id: 14375,
      image: pic6,
      postBy: 'admin',
      postDate: '21-10-2021',
      name: 'post format: audio',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing beatae natus rerum officia molestias. Reiciendis, ut. ',

    },
  ],
  products: [
    {
      id: 11233,
      title: "exercitation",
      category: ["books and media", "brownie"],
      images: [cake10, cake12, cake16],
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris eleifend, quam a vulputate dictum, massa quam dapibus leo, eget vulputate orci purus ut lorem. In fringilla mi in ligula. Pellentesque aliquam quam vel dolor. Nunc adipiscing. Sed quam odio, tempus ac, aliquam molestie, varius ac, tellus. Vestibulum ut nulla aliquam risus rutrum interdum. Pellentesque lorem. Curabitur sit amet erat quis risus feugiat viverra. Pellentesque augue justo, sagittis et, lacinia at, venenatis non, arcu. Nunc nec libero. In cursus dictum risus. Etiam tristique nisl a`,
      price: 999,
      sale: 20,
      release: "19-08-2021",
      tab: "featured",
    },
    {
      id: 24254,
      title: "adipiscing",
      category: ["choco chip", "brownie"],
      images: [cake12, cake16, cake18],
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris eleifend, quam a vulputate dictum, massa quam dapibus leo, eget vulputate orci purus ut lorem. In fringilla mi in ligula. Pellentesque aliquam quam vel dolor. Nunc adipiscing. Sed quam odio, tempus ac, aliquam molestie, varius ac, tellus. Vestibulum ut nulla aliquam risus rutrum interdum. Pellentesque lorem. Curabitur sit amet erat quis risus feugiat viverra. Pellentesque augue justo, sagittis et, lacinia at, venenatis non, arcu. Nunc nec libero. In cursus dictum risus. Etiam tristique nisl a`,
      price: 799,
      sale: 10,
      release: "19-08-2021",
      tab: "featured",
    },
    {
      id: 11342,
      title: "Mauris eleifend",
      category: ["dark chocolate"],
      images: [cake16, cake18, cake12],
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris eleifend, quam a vulputate dictum, massa quam dapibus leo, eget vulputate orci purus ut lorem. In fringilla mi in ligula. Pellentesque aliquam quam vel dolor. Nunc adipiscing. Sed quam odio, tempus ac, aliquam molestie, varius ac, tellus. Vestibulum ut nulla aliquam risus rutrum interdum. Pellentesque lorem. Curabitur sit amet erat quis risus feugiat viverra. Pellentesque augue justo, sagittis et, lacinia at, venenatis non, arcu. Nunc nec libero. In cursus dictum risus. Etiam tristique nisl a`,
      price: 699,
      sale: 10,
      release: "19-08-2021",
      tab: "featured",
    },
    {
      id: 15436,
      title: "consectetur",
      category: ["dark chocolate", "choco chip"],
      images: [cake18, cake12, cake16],
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris eleifend, quam a vulputate dictum, massa quam dapibus leo, eget vulputate orci purus ut lorem. In fringilla mi in ligula. Pellentesque aliquam quam vel dolor. Nunc adipiscing. Sed quam odio, tempus ac, aliquam molestie, varius ac, tellus. Vestibulum ut nulla aliquam risus rutrum interdum. Pellentesque lorem. Curabitur sit amet erat quis risus feugiat viverra. Pellentesque augue justo, sagittis et, lacinia at, venenatis non, arcu. Nunc nec libero. In cursus dictum risus. Etiam tristique nisl a`,
      price: 888,
      sale: 20,
      release: "18-08-2021",
      tab: "featured",
    },
    {
      id: 15437,
      title: "Mauris",
      category: ["dark chocolate", "choco chip"],
      images: [cake18, cake12, cake16],
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris eleifend, quam a vulputate dictum, massa quam dapibus leo, eget vulputate orci purus ut lorem. In fringilla mi in ligula. Pellentesque aliquam quam vel dolor. Nunc adipiscing. Sed quam odio, tempus ac, aliquam molestie, varius ac, tellus. Vestibulum ut nulla aliquam risus rutrum interdum. Pellentesque lorem. Curabitur sit amet erat quis risus feugiat viverra. Pellentesque augue justo, sagittis et, lacinia at, venenatis non, arcu. Nunc nec libero. In cursus dictum risus. Etiam tristique nisl a`,
      price: 888,
      sale: 20,
      release: "18-08-2021",
      tab: "featured",
    },
    {
      id: 15438,
      title: "vulputate",
      category: ["dark chocolate", "choco chip"],
      images: [cake4, cake12, cake16],
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris eleifend, quam a vulputate dictum, massa quam dapibus leo, eget vulputate orci purus ut lorem. In fringilla mi in ligula. Pellentesque aliquam quam vel dolor. Nunc adipiscing. Sed quam odio, tempus ac, aliquam molestie, varius ac, tellus. Vestibulum ut nulla aliquam risus rutrum interdum. Pellentesque lorem. Curabitur sit amet erat quis risus feugiat viverra. Pellentesque augue justo, sagittis et, lacinia at, venenatis non, arcu. Nunc nec libero. In cursus dictum risus. Etiam tristique nisl a`,
      price: 888,
      sale: 20,
      release: "18-08-2021",
      tab: "featured",
    },
    {
      id: 15439,
      title: "quam dapibus",
      category: ["dark chocolate", "choco chip"],
      images: [cake5, cake12, cake16],
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris eleifend, quam a vulputate dictum, massa quam dapibus leo, eget vulputate orci purus ut lorem. In fringilla mi in ligula. Pellentesque aliquam quam vel dolor. Nunc adipiscing. Sed quam odio, tempus ac, aliquam molestie, varius ac, tellus. Vestibulum ut nulla aliquam risus rutrum interdum. Pellentesque lorem. Curabitur sit amet erat quis risus feugiat viverra. Pellentesque augue justo, sagittis et, lacinia at, venenatis non, arcu. Nunc nec libero. In cursus dictum risus. Etiam tristique nisl a`,
      price: 888,
      sale: 20,
      release: "18-08-2021",
      tab: "featured",
    },
    {
      id: 15440,
      title: "elit",
      category: ["dark chocolate", "choco chip"],
      images: [cake18, cake12, cake16],
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris eleifend, quam a vulputate dictum, massa quam dapibus leo, eget vulputate orci purus ut lorem. In fringilla mi in ligula. Pellentesque aliquam quam vel dolor. Nunc adipiscing. Sed quam odio, tempus ac, aliquam molestie, varius ac, tellus. Vestibulum ut nulla aliquam risus rutrum interdum. Pellentesque lorem. Curabitur sit amet erat quis risus feugiat viverra. Pellentesque augue justo, sagittis et, lacinia at, venenatis non, arcu. Nunc nec libero. In cursus dictum risus. Etiam tristique nisl a`,
      price: 888,
      sale: 20,
      release: "18-08-2021",
      tab: "featured",
    },
    {
      id: 15446,
      title: "sit amet",
      category: ["dark chocolate", "choco chip"],
      images: [cake7, cake12, cake16],
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris eleifend, quam a vulputate dictum, massa quam dapibus leo, eget vulputate orci purus ut lorem. In fringilla mi in ligula. Pellentesque aliquam quam vel dolor. Nunc adipiscing. Sed quam odio, tempus ac, aliquam molestie, varius ac, tellus. Vestibulum ut nulla aliquam risus rutrum interdum. Pellentesque lorem. Curabitur sit amet erat quis risus feugiat viverra. Pellentesque augue justo, sagittis et, lacinia at, venenatis non, arcu. Nunc nec libero. In cursus dictum risus. Etiam tristique nisl a`,
      price: 888,
      sale: 20,
      release: "18-08-2021",
      tab: "latest",
    },
    {
      id: 15442,
      title: "Sed",
      category: ["dark chocolate", "choco chip"],
      images: [cake6, cake12, cake16],
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris eleifend, quam a vulputate dictum, massa quam dapibus leo, eget vulputate orci purus ut lorem. In fringilla mi in ligula. Pellentesque aliquam quam vel dolor. Nunc adipiscing. Sed quam odio, tempus ac, aliquam molestie, varius ac, tellus. Vestibulum ut nulla aliquam risus rutrum interdum. Pellentesque lorem. Curabitur sit amet erat quis risus feugiat viverra. Pellentesque augue justo, sagittis et, lacinia at, venenatis non, arcu. Nunc nec libero. In cursus dictum risus. Etiam tristique nisl a`,
      price: 888,
      sale: 20,
      release: "18-08-2021",
      tab: "latest",
    },
    {
      id: 15443,
      title: "eleifend",
      category: ["dark chocolate", "choco chip"],
      images: [cake18, cake12, cake16],
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris eleifend, quam a vulputate dictum, massa quam dapibus leo, eget vulputate orci purus ut lorem. In fringilla mi in ligula. Pellentesque aliquam quam vel dolor. Nunc adipiscing. Sed quam odio, tempus ac, aliquam molestie, varius ac, tellus. Vestibulum ut nulla aliquam risus rutrum interdum. Pellentesque lorem. Curabitur sit amet erat quis risus feugiat viverra. Pellentesque augue justo, sagittis et, lacinia at, venenatis non, arcu. Nunc nec libero. In cursus dictum risus. Etiam tristique nisl a`,
      price: 888,
      sale: 20,
      release: "18-08-2021",
      tab: "latest",
    },
    {
      id: 15444,
      title: "dolor sit",
      category: ["dark chocolate", "choco chip"],
      images: [cake5, cake12, cake16],
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris eleifend, quam a vulputate dictum, massa quam dapibus leo, eget vulputate orci purus ut lorem. In fringilla mi in ligula. Pellentesque aliquam quam vel dolor. Nunc adipiscing. Sed quam odio, tempus ac, aliquam molestie, varius ac, tellus. Vestibulum ut nulla aliquam risus rutrum interdum. Pellentesque lorem. Curabitur sit amet erat quis risus feugiat viverra. Pellentesque augue justo, sagittis et, lacinia at, venenatis non, arcu. Nunc nec libero. In cursus dictum risus. Etiam tristique nisl a`,
      price: 888,
      sale: 20,
      release: "18-08-2021",
      tab: "latest",
    },
    {
      id: 15445,
      title: "purus",
      category: ["dark chocolate", "choco chip"],
      images: [cake18, cake12, cake16],
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris eleifend, quam a vulputate dictum, massa quam dapibus leo, eget vulputate orci purus ut lorem. In fringilla mi in ligula. Pellentesque aliquam quam vel dolor. Nunc adipiscing. Sed quam odio, tempus ac, aliquam molestie, varius ac, tellus. Vestibulum ut nulla aliquam risus rutrum interdum. Pellentesque lorem. Curabitur sit amet erat quis risus feugiat viverra. Pellentesque augue justo, sagittis et, lacinia at, venenatis non, arcu. Nunc nec libero. In cursus dictum risus. Etiam tristique nisl a`,
      price: 888,
      sale: 20,
      release: "18-08-2021",
      tab: "latest",
    },
    {
      id: 15446,
      title: "quam odio",
      category: ["dark chocolate", "choco chip"],
      images: [cake6, cake12, cake16],
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris eleifend, quam a vulputate dictum, massa quam dapibus leo, eget vulputate orci purus ut lorem. In fringilla mi in ligula. Pellentesque aliquam quam vel dolor. Nunc adipiscing. Sed quam odio, tempus ac, aliquam molestie, varius ac, tellus. Vestibulum ut nulla aliquam risus rutrum interdum. Pellentesque lorem. Curabitur sit amet erat quis risus feugiat viverra. Pellentesque augue justo, sagittis et, lacinia at, venenatis non, arcu. Nunc nec libero. In cursus dictum risus. Etiam tristique nisl a`,
      price: 888,
      sale: 20,
      release: "18-08-2021",
      tab: "best seller",
    },
    {
      id: 15447,
      title: "fringilla",
      category: ["dark chocolate", "choco chip"],
      images: [cake7, cake12, cake16],
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris eleifend, quam a vulputate dictum, massa quam dapibus leo, eget vulputate orci purus ut lorem. In fringilla mi in ligula. Pellentesque aliquam quam vel dolor. Nunc adipiscing. Sed quam odio, tempus ac, aliquam molestie, varius ac, tellus. Vestibulum ut nulla aliquam risus rutrum interdum. Pellentesque lorem. Curabitur sit amet erat quis risus feugiat viverra. Pellentesque augue justo, sagittis et, lacinia at, venenatis non, arcu. Nunc nec libero. In cursus dictum risus. Etiam tristique nisl a`,
      price: 888,
      sale: 20,
      release: "18-08-2021",
      tab: "best seller",
    },
    {
      id: 15448,
      title: "Pellentesque",
      category: ["dark chocolate", "choco chip"],
      images: [cake18, cake12, cake16],
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris eleifend, quam a vulputate dictum, massa quam dapibus leo, eget vulputate orci purus ut lorem. In fringilla mi in ligula. Pellentesque aliquam quam vel dolor. Nunc adipiscing. Sed quam odio, tempus ac, aliquam molestie, varius ac, tellus. Vestibulum ut nulla aliquam risus rutrum interdum. Pellentesque lorem. Curabitur sit amet erat quis risus feugiat viverra. Pellentesque augue justo, sagittis et, lacinia at, venenatis non, arcu. Nunc nec libero. In cursus dictum risus. Etiam tristique nisl a`,
      price: 888,
      sale: 20,
      release: "18-08-2021",
      tab: "best seller",
    },
    {
      id: 15449,
      title: "molestie",
      category: ["dark chocolate", "choco chip"],
      images: [cake5, cake12, cake16],
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris eleifend, quam a vulputate dictum, massa quam dapibus leo, eget vulputate orci purus ut lorem. In fringilla mi in ligula. Pellentesque aliquam quam vel dolor. Nunc adipiscing. Sed quam odio, tempus ac, aliquam molestie, varius ac, tellus. Vestibulum ut nulla aliquam risus rutrum interdum. Pellentesque lorem. Curabitur sit amet erat quis risus feugiat viverra. Pellentesque augue justo, sagittis et, lacinia at, venenatis non, arcu. Nunc nec libero. In cursus dictum risus. Etiam tristique nisl a`,
      price: 888,
      sale: 20,
      release: "18-08-2021",
      tab: "best seller",
    },
    {
      id: 15450,
      title: "dapibus",
      category: ["dark chocolate", "choco chip"],
      images: [cake18, cake12, cake16],
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris eleifend, quam a vulputate dictum, massa quam dapibus leo, eget vulputate orci purus ut lorem. In fringilla mi in ligula. Pellentesque aliquam quam vel dolor. Nunc adipiscing. Sed quam odio, tempus ac, aliquam molestie, varius ac, tellus. Vestibulum ut nulla aliquam risus rutrum interdum. Pellentesque lorem. Curabitur sit amet erat quis risus feugiat viverra. Pellentesque augue justo, sagittis et, lacinia at, venenatis non, arcu. Nunc nec libero. In cursus dictum risus. Etiam tristique nisl a`,
      price: 888,
      sale: 20,
      release: "18-08-2021",
      tab: "best seller",
    },
    {
      id: 15451,
      title: "eleifend",
      category: ["dark chocolate", "choco chip"],
      images: [cake4, cake12, cake16],
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris eleifend, quam a vulputate dictum, massa quam dapibus leo, eget vulputate orci purus ut lorem. In fringilla mi in ligula. Pellentesque aliquam quam vel dolor. Nunc adipiscing. Sed quam odio, tempus ac, aliquam molestie, varius ac, tellus. Vestibulum ut nulla aliquam risus rutrum interdum. Pellentesque lorem. Curabitur sit amet erat quis risus feugiat viverra. Pellentesque augue justo, sagittis et, lacinia at, venenatis non, arcu. Nunc nec libero. In cursus dictum risus. Etiam tristique nisl a`,
      price: 888,
      sale: 20,
      release: "18-08-2021",
      tab: "best seller",
    },
    {
      id: 15452,
      title: "vulputate",
      category: ["dark chocolate", "choco chip"],
      images: [cake18, cake12, cake16],
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ante. Mauris eleifend, quam a vulputate dictum, massa quam dapibus leo, eget vulputate orci purus ut lorem. In fringilla mi in ligula. Pellentesque aliquam quam vel dolor. Nunc adipiscing. Sed quam odio, tempus ac, aliquam molestie, varius ac, tellus. Vestibulum ut nulla aliquam risus rutrum interdum. Pellentesque lorem. Curabitur sit amet erat quis risus feugiat viverra. Pellentesque augue justo, sagittis et, lacinia at, venenatis non, arcu. Nunc nec libero. In cursus dictum risus. Etiam tristique nisl a`,
      price: 888,
      sale: 20,
      release: "18-08-2021",
      tab: "best seller",
    },
  ],
};
export default data;
