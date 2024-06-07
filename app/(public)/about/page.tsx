import { Metadata } from "next";


export const metadata: Metadata = {
 title: 'About',
 description: 'This page is about ',
};


export default function AboutPage(){
    return(
      
        <span className="text-4xl">About Page</span>
    
    )
}