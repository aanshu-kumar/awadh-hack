import Image from "next/image";
import logo from "@/Assets/logo.png"

export function Footer(){

    return<div className="bg-black rounded-3xl m-5 p-3 border-t-2 border-amber-400">
        <div className="w-11/12 ml-20 flex justify-center h-40 gap-14 pt-5">
            <div className="w-2/3 h-20">
            <h4 className="font-bold text-3xl text-white">Explore:</h4>
                <div className="w-10 h-1 bg-blue-500"></div>
                <p className="text-xl font-medium text-amber-400"></p>
            </div>
            <div className="w-full h-20 flex justify-center">
                <Image className="rounded-2xl" src={logo} alt="" width={300} height={100}></Image>
            </div>
            <div className="w-2/3 h-20 flex flex-col justify-end gap-1">
                <h4 className="font-bold text-3xl text-white">Contact us:</h4>
                <div className="w-10 h-1 bg-blue-500"></div>
                <p className="text-xl font-medium text-amber-400">bietgdsc2023@gmail.com</p>
            </div>
            
        </div>
        <div className="flex justify-between mx-5 text-gray-500 pb-4 flex-col-reverse md:flex-row">
            <p className="text-center md:text-left"><i>© 2024 Awadh Hack - BIET,Lucknow.  All rights reserved.</i></p>
            <div className="flex md:flex-row gap-1 justify-center">
            <p><i>Made with</i></p>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 20.9999L10.55 19.6999C8.86667 18.1832 7.475 16.8749 6.375 15.7749C5.275 14.6749 4.4 13.6874 3.75 12.8124C3.1 11.9374 2.64583 11.1332 2.3875 10.3999C2.12917 9.66657 2 8.91657 2 8.1499C2 6.58324 2.525 5.2749 3.575 4.2249C4.625 3.1749 5.93333 2.6499 7.5 2.6499C8.36667 2.6499 9.19167 2.83324 9.975 3.1999C10.7583 3.56657 11.4333 4.08324 12 4.7499C12.5667 4.08324 13.2417 3.56657 14.025 3.1999C14.8083 2.83324 15.6333 2.6499 16.5 2.6499C18.0667 2.6499 19.375 3.1749 20.425 4.2249C21.475 5.2749 22 6.58324 22 8.1499C22 8.91657 21.8708 9.66657 21.6125 10.3999C21.3542 11.1332 20.9 11.9374 20.25 12.8124C19.6 13.6874 18.725 14.6749 17.625 15.7749C16.525 16.8749 15.1333 18.1832 13.45 19.6999L12 20.9999ZM12 18.2999C13.6 16.8666 14.9167 15.6374 15.95 14.6124C16.9833 13.5874 17.8 12.6957 18.4 11.9374C19 11.1791 19.4167 10.5041 19.65 9.9124C19.8833 9.32074 20 8.73324 20 8.1499C20 7.1499 19.6667 6.31657 19 5.6499C18.3333 4.98324 17.5 4.6499 16.5 4.6499C15.7167 4.6499 14.9917 4.87074 14.325 5.3124C13.6583 5.75407 13.2 6.31657 12.95 6.9999H11.05C10.8 6.31657 10.3417 5.75407 9.675 5.3124C9.00833 4.87074 8.28333 4.6499 7.5 4.6499C6.5 4.6499 5.66667 4.98324 5 5.6499C4.33333 6.31657 4 7.1499 4 8.1499C4 8.73324 4.11667 9.32074 4.35 9.9124C4.58333 10.5041 5 11.1791 5.6 11.9374C6.2 12.6957 7.01667 13.5874 8.05 14.6124C9.08333 15.6374 10.4 16.8666 12 18.2999Z" fill="#EA4335"/>
            </svg>

            <p><i>at GDG.</i></p>
            </div>
            
        </div>
    </div>
}