import Link from "next/link";
import Image from "next/image";
import InstagramIcon from '@/src/icons/instagram.svg';
import XIcon from '@/src/icons/x.svg';
import WhatsAppIcon from '@/src/icons/whatsapp.svg';
import LinkedInIcon from '@/src/icons/linkedin-svgrepo-com.svg';
import FacebookIcon from '@/src/icons/facebook.svg';
import GitHubIcon from '@/src/icons/github.svg';
import ThreadsIcon from '@/src/icons/threads.svg';
import NostrIcon from '@/src/icons/nostr.svg';

export default function Footer(){

    const Year: number = new Date().getFullYear();
    const contatos = [
        { classicone: 'rute', value: 'Instagram', path: 'https://www.instagram.com/cust.coding.solutions?igsh=NG9icXB6Y2VncjRo', Icon: InstagramIcon },
        { classicone: 'rute', value: 'X (Twitter)', path: 'https://x.com/custCSolutions?t=xCj8XO90CJdgeUG7Y_yLJg&s=09', Icon: XIcon },
        { classicone: 'rute', value: 'WhatsApp', path: 'https://wa.me/message/BFMJUYLO6XNDC1', Icon: WhatsAppIcon },
        { classicone: 'rute', value: 'LinkedIn', path: 'https://www.linkedin.com/company/cust-coding-solutions/', Icon: LinkedInIcon },
        { classicone: 'rute', value: 'Facebook', path: 'https://www.facebook.com/share/1BU8vbC6fQ/', Icon: FacebookIcon },
        { classicone: 'rute', value: 'GitHub', path: 'https://github.com/Cust-Coding', Icon: GitHubIcon },
        { classicone: 'rute', value: 'Threads', path: 'https://www.threads.com/@cust.coding.solutions', Icon: ThreadsIcon },
        { classicone: 'rute', value: 'Nostr', path: 'https://primal.net/p/nprofile1qqs284lnggl7kfvxysenaf0jf3vv4sd800u3jvtnks4y3yhgn8wvnjqxwc95f', Icon: NostrIcon },
    ]
 

    return(
        <footer  className="relative w-full mx-auto text-fd-muted-foreground lg:w-[calc(100%-30%)] overflow-hidden text-white">
        <div className="absolute w-full h-full inset-0 backdrop-blur"></div>
        <div className="-z-10 h-24 w-[33rem] bg-cyan-500/50 rounded-[100%] max-w-screen absolute bottom-0 right-1/2 translate-1/2 blur-3xl"></div>
        
        <div className="bg-fd-background/50 backdrop-blur-lg px-5  max-w-fd-container pt-10">
        <div className="grid grid-cols-2 sm:flex justify-around px-4 lg:px-10">
        <div className="flex-row sm:flex-col gap-4 flex items-start col-span-2 w-full sm:w-auto max-sm:justify-between pb-10">
            <Image
            src={"/logoccs.svg"}
            alt="Logo cust coding solutions"
            priority
            width={80}          
            height={30}
            />
            <h3>Cust Coding Solutions</h3>
            
            <div className="flex items-center justify-center flex-wrap gap-3 text-white/50 hover:text-white/80 ">
               {contatos.map((contato, index) =>{
                const Icon = contato.Icon;
                    return(
                        <a
                            key={index}
                            href={contato.path}
                            target="_blank"
                            className="h-8 w-8 relative group grid place-items-center hover:text-fd-foreground"
                            >

                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="absolute -top-[0.5px] -right-0.25 z-10 duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] opacity-20 group-hover:opacity-100"><path d="M21 8V5a2 2 0 0 0-2-2h-3"></path></svg>

                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="absolute -bottom-[0.5px] -left-0.25 duration-300 group-hover:translate-y-0.5 group-hover:-translate-x-0.5 z-10 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] opacity-20 group-hover:opacity-100"><path d="M3 16v3a2 2 0 0 0 2 2h3"></path></svg>

                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="absolute -bottom-[0.5px] -right-0.25 z-10 duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] opacity-20 group-hover:opacity-100"><path d="M16 21h3a2 2 0 0 0 2-2v-3"></path></svg>

                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="absolute -top-[0.5px] -left-0.25 z-10 duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] opacity-20 group-hover:opacity-100"><path d="M8 3H5a2 2 0 0 0-2 2v3"></path></svg>

                            <div className="bg-grid-lines absolute inset-0 ease-out duration-300 group-hover:opacity-50 opacity-0 ![background-position:-15px_-15px]"></div>
        
                                                    
                                <Icon
                                    className={
                                        "text-gray-500 hover:text-gray-300 transform-3d perspective-distant backface-hidden group-hover:rotate-x-180 group-hover:rotate-z-180 group-hover:-rotate-y-180 duration-1000 " +
                                        (Icon === NostrIcon ? 'w-6 h-6' : 'w-4 h-4')
                                    }
                                />
                        </a>
                    );
               })}

    
                </div>
                
                </div>
                
                
                
                <div className="flex flex-col gap-3 items-start text-sm">
                    <h4 className="text-fd-foreground font-semibold mt-2">Rapido</h4>
                    <Link className=" " href={'#servicos'}>Serviços</Link>
                    {/*<Link className=" " href={'/'}>Projetos</Link>*/}
                    <Link className=" " href={'#sobre'}>Sobre</Link>
                </div>
                     
                <div className="flex  items-center justify-end">

                    <div className="w-[10rem] flex text-sm items-start flex-col gap-3">
                        <h4 className="text-fd-foreground font-semibold mt-2">Contatos</h4>

                        {contatos.map((contatos, index) =>{
                            return(<Link key={index} className={contatos.classicone} href={contatos.path}>{contatos.value}</Link>);
                        })}
                    </div>
                    
                </div>

            </div>
                     
                     
                    <div className="flex items-center w-full justify-around py-4 border-t  mix-blend-plus-darker dark:mix-blend-plus-lighter mt-10 max-lg:px-8 flex-col gap-3 md:gap-0 md:flex-row">
                        <div className="text-xs">
                            <div className="inline-block  mr-1">© <span>Cust Coding Solutions.{Year}</span></div>
                        </div>
                        <span className="text-xs">Todos direitos reservados</span>
                        
                    </div>
            </div>
        </footer>
    );
}