window.addEventListener('load',()=>{setTimeout(()=>{document.getElementById('barFill').style.width='72%'},200)});
  setTimeout(()=>{let v=0;const c=document.getElementById('count');const iv=setInterval(()=>{v+=11;if(v>=500){v=500;clearInterval(iv)}c.textContent=v+'+'},20)},900);
  const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.15});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
  let counted=false;
  const sio=new IntersectionObserver(es=>{if(es[0].isIntersecting&&!counted){counted=true;
    document.querySelectorAll('[data-count]').forEach(c=>{const t=+c.dataset.count,sfx=c.dataset.suffix||'';let v=0;const s=t/50;
      const iv=setInterval(()=>{v+=s;if(v>=t){v=t;clearInterval(iv)}c.textContent=Math.floor(v)+sfx},26)})}
  },{threshold:.4});
  const s4=document.querySelector('.stats');if(s4)sio.observe(s4);
  document.getElementById('joinBtn').onclick=()=>{const e=document.getElementById('email').value;if(e&&e.includes('@')){document.getElementById('joinForm').style.display='none';document.getElementById('joined').style.display='block';}else document.getElementById('email').focus();};
  document.querySelectorAll('.fq').forEach(q=>{q.onclick=()=>{const item=q.parentElement,ans=item.querySelector('.fa'),open=item.classList.contains('open');document.querySelectorAll('.fitem').forEach(i=>{i.classList.remove('open');i.querySelector('.fa').style.maxHeight='0'});if(!open){item.classList.add('open');ans.style.maxHeight=ans.scrollHeight+'px'}}});