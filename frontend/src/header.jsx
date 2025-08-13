import * as React from 'react';
export default function Header() {
  return (
    <div className="flex justify-around items-center p-4 ">
      <a href="" className="font-bold">Logo</a>
      <ul className="flex justify-around items-center gap-10">
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </div>
  );
}
