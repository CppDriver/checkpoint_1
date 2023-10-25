import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  encode(url: string) {
    return encodeURIComponent(url);
  }

  images: { id: string, author: string, width: number, height: number, url: string, download_url: string}[] = [
    {"id":"0","author":"Alejandro Escamilla","width":5000,"height":3333,"url":"https://unsplash.com/photos/yC-Yzbqy7PY","download_url":"https://picsum.photos/id/0/5000/3333"},
    {"id":"10","author":"Paul Jarvis","width":2500,"height":1667,"url":"https://unsplash.com/photos/6J--NXulQCs","download_url":"https://picsum.photos/id/10/2500/1667"},
    {"id":"11","author":"Paul Jarvis","width":2500,"height":1667,"url":"https://unsplash.com/photos/Cm7oKel-X2Q","download_url":"https://picsum.photos/id/11/2500/1667"},
    {"id":"12","author":"Paul Jarvis","width":2500,"height":1667,"url":"https://unsplash.com/photos/I_9ILwtsl_k","download_url":"https://picsum.photos/id/12/2500/1667"},
    {"id":"13","author":"Paul Jarvis","width":2500,"height":1667,"url":"https://unsplash.com/photos/3MtiSMdnoCo","download_url":"https://picsum.photos/id/13/2500/1667"},
    {"id":"14","author":"Paul Jarvis","width":2500,"height":1667,"url":"https://unsplash.com/photos/IQ1kOQTJrOQ","download_url":"https://picsum.photos/id/14/2500/1667"},
    {"id":"15","author":"Paul Jarvis","width":2500,"height":1667,"url":"https://unsplash.com/photos/NYDo21ssGao","download_url":"https://picsum.photos/id/15/2500/1667"},
    {"id":"16","author":"Paul Jarvis","width":2500,"height":1667,"url":"https://unsplash.com/photos/gkT4FfgHO5o","download_url":"https://picsum.photos/id/16/2500/1667"},
    {"id":"17","author":"Paul Jarvis","width":2500,"height":1667,"url":"https://unsplash.com/photos/Ven2CV8IJ5A","download_url":"https://picsum.photos/id/17/2500/1667"},
    {"id":"18","author":"Paul Jarvis","width":2500,"height":1667,"url":"https://unsplash.com/photos/Ps2n0rShqaM","download_url":"https://picsum.photos/id/18/2500/1667"},
    {"id":"19","author":"Paul Jarvis","width":2500,"height":1667,"url":"https://unsplash.com/photos/P7Lh0usGcuk","download_url":"https://picsum.photos/id/19/2500/1667"},
    {"id":"20","author":"Aleks Dorohovich","width":3670,"height":2462,"url":"https://unsplash.com/photos/nJdwUHmaY8A","download_url":"https://picsum.photos/id/20/3670/2462"},
    {"id":"21","author":"Alejandro Escamilla","width":3008,"height":2008,"url":"https://unsplash.com/photos/jVb0mSn0LbE","download_url":"https://picsum.photos/id/21/3008/2008"},
    {"id":"22","author":"Alejandro Escamilla","width":4434,"height":3729,"url":"https://unsplash.com/photos/du_OrQAA4r0","download_url":"https://picsum.photos/id/22/4434/3729"},
    {"id":"23","author":"Alejandro Escamilla","width":3887,"height":4899,"url":"https://unsplash.com/photos/8yqds_91OLw","download_url":"https://picsum.photos/id/23/3887/4899"},
    {"id":"24","author":"Alejandro Escamilla","width":4855,"height":1803,"url":"https://unsplash.com/photos/cZhUxIQjILg","download_url":"https://picsum.photos/id/24/4855/1803"},
    {"id":"25","author":"Alejandro Escamilla","width":5000,"height":3333,"url":"https://unsplash.com/photos/Iuq0EL4EINY","download_url":"https://picsum.photos/id/25/5000/3333"},
    {"id":"26","author":"Vadim Sherbakov","width":4209,"height":2769,"url":"https://unsplash.com/photos/tCICLJ5ktBE","download_url":"https://picsum.photos/id/26/4209/2769"},
    {"id":"27","author":"Yoni Kaplan-Nadel","width":3264,"height":1836,"url":"https://unsplash.com/photos/iJnZwLBOB1I","download_url":"https://picsum.photos/id/27/3264/1836"},
    {"id":"28","author":"Jerry Adney","width":4928,"height":3264,"url":"https://unsplash.com/photos/_WiFMBRT7Aw","download_url":"https://picsum.photos/id/28/4928/3264"},
    {"id":"29","author":"Go Wild","width":4000,"height":2670,"url":"https://unsplash.com/photos/V0yAek6BgGk","download_url":"https://picsum.photos/id/29/4000/2670"},
    {"id":"102","author":"Ben Moore","width":4320,"height":3240,"url":"https://unsplash.com/photos/pJILiyPdrXI","download_url":"https://picsum.photos/id/102/4320/3240"},
    {"id":"103","author":"Ilham Rahmansyah","width":2592,"height":1936,"url":"https://unsplash.com/photos/DwTZwZYi9Ww","download_url":"https://picsum.photos/id/103/2592/1936"},
    {"id":"104","author":"Dyaa Eldin","width":3840,"height":2160,"url":"https://unsplash.com/photos/2fl-ocJ5MOA","download_url":"https://picsum.photos/id/104/3840/2160"},
    {"id":"106","author":"Arvee Marie","width":2592,"height":1728,"url":"https://unsplash.com/photos/YnfGtpt2gf4","download_url":"https://picsum.photos/id/106/2592/1728"},
    {"id":"107","author":"Lukas Schweizer","width":5000,"height":3333,"url":"https://unsplash.com/photos/9VWOr22LhVI","download_url":"https://picsum.photos/id/107/5000/3333"},
    {"id":"108","author":"Florian Klauer","width":2000,"height":1333,"url":"https://unsplash.com/photos/t1mqA3V3-7g","download_url":"https://picsum.photos/id/108/2000/1333"},
    {"id":"109","author":"Zwaddi","width":4287,"height":2392,"url":"https://unsplash.com/photos/YvYBOSiBJE8","download_url":"https://picsum.photos/id/109/4287/2392"},
    {"id":"110","author":"Kenneth Thewissen","width":5000,"height":3333,"url":"https://unsplash.com/photos/D76DklsG-5U","download_url":"https://picsum.photos/id/110/5000/3333"},
    {"id":"111","author":"Gabe Rodriguez","width":4400,"height":2656,"url":"https://unsplash.com/photos/eLUegVAjN7s","download_url":"https://picsum.photos/id/111/4400/2656"},
    {"id":"112","author":"Zugr","width":4200,"height":2800,"url":"https://unsplash.com/photos/kmF_Aq8gkp0","download_url":"https://picsum.photos/id/112/4200/2800"},
    {"id":"113","author":"Zugr","width":4168,"height":2464,"url":"https://unsplash.com/photos/yZf1quatKCA","download_url":"https://picsum.photos/id/113/4168/2464"},
    {"id":"114","author":"Brian Gonzalez","width":3264,"height":2448,"url":"https://unsplash.com/photos/llYg8Ni43fc","download_url":"https://picsum.photos/id/114/3264/2448"},
    {"id":"115","author":"Christian Hebell","width":1500,"height":1000,"url":"https://unsplash.com/photos/A6S-q3D67Ss","download_url":"https://picsum.photos/id/115/1500/1000"},
    {"id":"116","author":"Anton Sulsky","width":3504,"height":2336,"url":"https://unsplash.com/photos/YcfCXxo7rpc","download_url":"https://picsum.photos/id/116/3504/2336"},
    {"id":"117","author":"Daniel Ebersole","width":1544,"height":1024,"url":"https://unsplash.com/photos/Q14J2k8VE3U","download_url":"https://picsum.photos/id/117/1544/1024"},
    {"id":"118","author":"Rick Waalders","width":1500,"height":1000,"url":"https://unsplash.com/photos/d-Cr8MEW5Uc","download_url":"https://picsum.photos/id/118/1500/1000"},
    {"id":"119","author":"Nadir Balcikli","width":3264,"height":2176,"url":"https://unsplash.com/photos/wE9nUW7tMmk","download_url":"https://picsum.photos/id/119/3264/2176"},
    {"id":"120","author":"Guillaume","width":4928,"height":3264,"url":"https://unsplash.com/photos/_DA3D5P71qs","download_url":"https://picsum.photos/id/120/4928/3264"},
    {"id":"121","author":"Radio Pink","width":1600,"height":1067,"url":"https://unsplash.com/photos/p-bkdO43shE","download_url":"https://picsum.photos/id/121/1600/1067"},
    {"id":"122","author":"Vadim Sherbakov","width":4147,"height":2756,"url":"https://unsplash.com/photos/xS_RzdD5CFE","download_url":"https://picsum.photos/id/122/4147/2756"},
    {"id":"123","author":"Mark Doda","width":4928,"height":3264,"url":"https://unsplash.com/photos/tS9hJOnmKK8","download_url":"https://picsum.photos/id/123/4928/3264"},
    {"id":"124","author":"Anton Sulsky","width":3504,"height":2336,"url":"https://unsplash.com/photos/fj0tFloTPGQ","download_url":"https://picsum.photos/id/124/3504/2336"},
    {"id":"125","author":"Rick Waalders","width":1500,"height":1000,"url":"https://unsplash.com/photos/3HlgJNdnD7I","download_url":"https://picsum.photos/id/125/1500/1000"},
    {"id":"126","author":"Zugr","width":4272,"height":2511,"url":"https://unsplash.com/photos/asrWX-lU3RE","download_url":"https://picsum.photos/id/126/4272/2511"},
    {"id":"127","author":"Marcin Czerwinski","width":4032,"height":2272,"url":"https://unsplash.com/photos/rf-0DQu5M6Y","download_url":"https://picsum.photos/id/127/4032/2272"},
    {"id":"128","author":"Matteo Minelli","width":3823,"height":2549,"url":"https://unsplash.com/photos/hlnucYOsL-c","download_url":"https://picsum.photos/id/128/3823/2549"},
    {"id":"129","author":"Charlie Foster","width":4910,"height":3252,"url":"https://unsplash.com/photos/A88emaZe7d8","download_url":"https://picsum.photos/id/129/4910/3252"},
    {"id":"130","author":"Ryan Jacques","width":3807,"height":2538,"url":"https://unsplash.com/photos/ywiAen4L4qA","download_url":"https://picsum.photos/id/130/3807/2538"}]
}
