import React from "react";

export default function Footer() {
  return (
    <div >
    
      <div className=" py-10 absolute left-0 right-0  border-t-2 mt-2" >
        <div className="flex mx-20 flex-wrap ">
          <section className="  flex-grow m-3">
            <div className="">
              <h3 className="text-[12px] uppercase fontbold ">Customer Services</h3>
              <ul>
                <li>
                  <a href="#" className="text-[11px] fontThin ">SHIPPING</a>
                </li>
                <li>
                  <a href="#" className="text-[11px] fontThin ">RETURNS</a>
                </li>
                <li>
                  <a href="#" className="text-[11px] fontThin ">WORLDWIDE RETURN PORTAL</a>
                </li>
              </ul>
            </div>
          </section>
          <section className="footer-block m-3 flex-grow">
            <div className="footer-sect">
              <h3 className="text-[12px] uppercase fontbold ">Customer Services</h3>
              <ul>
                <li>
                  <a href="#" className="text-[11px] fontThin ">SHIPPING</a>
                </li>
                <li>
                  <a href="#" className="text-[11px] fontThin ">RETURNS</a>
                </li>
                <li>
                  <a href="#" className="text-[11px] fontThin ">WORLDWIDE RETURN PORTAL</a>
                </li>
              </ul>
            </div>
          </section>
          <section className="footer-block m-3 flex-grow-2">
            <div className="footer-sect">
              <h3 className="text-[12px] uppercase fontbold ">Contact</h3>
              <ul>
                <li>
                  <a href="#" className="text-[11px] fontThin ">Email: info@foxwrld@gmail.com</a>
                </li>
              
                <li>
                  <a href="#" className="text-[11px] fontThin ">Call: +2341234567</a>
                </li>
              </ul>
            </div>
          </section>
        </div>
        <div className="mx-20  flex mt-11 pt-10 flex-wrap ">
          <div className="m-3">
         <p className="text-sm"> Copyright © 2023 FOXWRLD.COM</p>
          </div>
          <div className="m-3">
            <p className="text-[12px] fontThin">if you are using a screen-reader and are having problems using this website, please call +44 800 279 4998- link to call Customer Service for problems using a screen reader on Burberry.com or contact us for assistance.</p>
          </div>
        </div>
      </div>
      
    </div>
  );
}
