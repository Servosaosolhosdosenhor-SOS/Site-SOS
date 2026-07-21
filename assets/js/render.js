function esc(value){
  return String(value ?? "").replace(/[&<>"']/g, c => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  })[c]);
}

function formatDate(iso){
  const d=new Date(iso+"T12:00:00");
  return {
    dia:String(d.getDate()).padStart(2,"0"),
    mes:d.toLocaleDateString("pt-BR",{month:"short"}).replace(".",""),
    ano:d.getFullYear()
  };
}


function courseIsReleased(courseId){
  return window.SOS_CONFIG?.cursosLiberados?.[courseId] === true;
}

function comingSoonMarkup(course){
  return `
    <div class="coming-soon-panel">
      <div class="coming-icon">${esc(course?.icon || "♫")}</div>
      <span class="course-status">Em breve</span>
      <h2>${esc(course?.title || "Formação musical")}</h2>
      <p>Esta formação ainda está sendo preparada. Assim que o conteúdo for liberado, as aulas aparecerão nesta página.</p>
      <a class="btn btn-primary" href="formacao-musical.html">Voltar à formação musical</a>
    </div>`;
}

function renderCoursePage(courseId){
  const course=window.SOS_CURSOS?.[courseId];
  if(!course) return;
  document.querySelectorAll("[data-course-title]").forEach(n=>n.textContent=course.title);
  document.querySelectorAll("[data-course-description]").forEach(n=>n.textContent=course.description);
  document.querySelectorAll("[data-course-icon]").forEach(n=>n.textContent=course.icon);
  const list=document.querySelector("#lessonList");
  if(!list) return;

  if(!courseIsReleased(courseId)){
    const host=list.closest(".container") || list.parentElement;
    const header=host?.querySelector(".course-header");
    if(header) header.remove();
    list.innerHTML=comingSoonMarkup(course);
    list.classList.remove("lesson-list");
    return;
  }

  list.innerHTML=course.lessons.map((lesson,index)=>`
    <article class="lesson-row reveal visible">
      <div class="lesson-number">${String(index+1).padStart(2,"0")}</div>
      <div>
        <h3>${esc(lesson[0])}</h3>
        <p>${esc(lesson[1])}</p>
      </div>
      <a class="small-btn" href="aula.html?curso=${encodeURIComponent(courseId)}&aula=${index+1}">Abrir aula</a>
    </article>
  `).join("");
  const count=document.querySelector("#lessonCount");
  if(count) count.textContent=course.lessons.length;
}


function renderVisual(visual){
  if(!visual) return '';
  const title=visual.title?`<h2>${esc(visual.title)}</h2>`:'';
  if(visual.type==='image') return `<section class="lesson-block lesson-visual">${title}<figure><img class="zoomable" src="${esc(visual.src)}" alt="${esc(visual.alt||'Apoio visual da aula')}">${visual.caption?`<figcaption>${esc(visual.caption)}</figcaption>`:''}</figure></section>`;
  if(visual.type==='gallery') return `<section class="lesson-block lesson-visual">${title}<div class="visual-gallery">${visual.images.map(i=>`<figure><img class="zoomable" src="${esc(i.src)}" alt="${esc(i.alt||'Apoio visual')}">${i.caption?`<figcaption>${esc(i.caption)}</figcaption>`:''}</figure>`).join('')}</div></section>`;
  if(visual.type==='steps') return `<section class="lesson-block lesson-visual">${title}<div class="visual-steps">${visual.items.map(i=>`<div><span>${esc(i.icon)}</span><strong>${esc(i.label)}</strong></div>`).join('')}</div></section>`;
  if(visual.type==='parts') return `<section class="lesson-block lesson-visual">${title}<div class="instrument-parts">${visual.items.map((x,i)=>`<span style="--i:${i}">${esc(x)}</span>`).join('')}<div class="instrument-shape">VIOLÃO</div></div></section>`;
  if(visual.type==='chord-table') return `<section class="lesson-block lesson-visual">${title}<div class="mini-table">${visual.items.map(x=>`<div><strong>${esc(x[0])}</strong><span>${esc(x[1])}</span></div>`).join('')}</div></section>`;
  if(visual.type==='chords') return `<section class="lesson-block lesson-visual">${title}<div class="chord-flow">${visual.chords.map(x=>`<span>${esc(x)}</span>`).join('')}</div></section>`;
  if(visual.type==='study-plan') return `<section class="lesson-block lesson-visual">${title}<div class="study-plan">${visual.items.map(x=>`<div><strong>${esc(x[0])}</strong><span>${esc(x[1])}</span></div>`).join('')}</div></section>`;
  if(visual.type==='error-table') return `<section class="lesson-block lesson-visual">${title}<div class="error-grid">${visual.items.map(x=>`<div><strong>${esc(x[0])}</strong><span>${esc(x[1])}</span></div>`).join('')}</div></section>`;
  if(visual.type==='quiz') return `<section class="lesson-block lesson-visual">${title}<div class="quiz-list">${visual.questions.map((q,i)=>`<details><summary>${i+1}. ${esc(q)}</summary><p>Responda no caderno e confira com o instrutor.</p></details>`).join('')}</div></section>`;
  if(visual.type==='checklist') return `<section class="lesson-block lesson-visual">${title}<div class="visual-checklist">${visual.items.map(x=>`<label><input type="checkbox"> ${esc(x)}</label>`).join('')}</div></section>`;
  if(visual.type==='breath') return `<section class="lesson-block lesson-visual">${title}<div class="breath-diagram"><div class="lungs">↔</div>${visual.items.map((x,i)=>`<div class="breath-step"><span>${i+1}</span>${esc(x)}</div>`).join('')}</div></section>`;
  if(visual.type==='pitch') return `<section class="lesson-block lesson-visual">${title}<div class="pitch-ladder">${visual.notes.map((x,i)=>`<span style="--step:${i}">${esc(x)}</span>`).join('')}</div></section>`;
  if(visual.type==='vowels') return `<section class="lesson-block lesson-visual">${title}<div class="vowel-row">${visual.items.map(x=>`<span>${esc(x)}</span>`).join('')}</div></section>`;
  if(visual.type==='timeline') return `<section class="lesson-block lesson-visual">${title}<div class="visual-timeline">${visual.items.map((x,i)=>`<div><span>${i+1}</span><strong>${esc(x)}</strong></div>`).join('')}</div></section>`;
  if(visual.type==='rhythm') return `<section class="lesson-block lesson-visual">${title}<div class="rhythm-grid">${visual.beats.map((x,i)=>`<div><span>${i+1}</span><strong>${esc(x)}</strong></div>`).join('')}</div></section>`;
  if(visual.type==='mic') return `<section class="lesson-block lesson-visual">${title}<div class="mic-diagram"><span class="mic-icon">🎤</span><div class="distance-line"><strong>${esc(visual.distance)}</strong></div><span class="mouth-icon">👄</span></div><ul>${visual.tips.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></section>`;
  if(visual.type==='fingers') return `<section class="lesson-block lesson-visual">${title}<div class="hand-pair"><div><strong>Mão esquerda</strong><div class="finger-row">${visual.left.map(x=>`<span>${esc(x)}</span>`).join('')}</div></div><div><strong>Mão direita</strong><div class="finger-row">${visual.right.map(x=>`<span>${esc(x)}</span>`).join('')}</div></div></div></section>`;
  if(visual.type==='keyboard'){
    const white=['C','D','E','F','G','A','B','C2','D2','E2','F2','G2','A2','B2'];
    const blackAt={0:'C#',1:'D#',3:'F#',4:'G#',5:'A#',7:'C#2',8:'D#2',10:'F#2',11:'G#2',12:'A#2'};
    const labelFor=n=>{const h=visual.highlights.find(x=>x.note===n || (n.endsWith('2')&&x.note===n.slice(0,-1)));return h?.label||''};
    const active=n=>visual.highlights.some(x=>x.note===n || (n.endsWith('2')&&x.note===n.slice(0,-1)));
    return `<section class="lesson-block lesson-visual">${title}<div class="keyboard-diagram">${white.map((n,i)=>`<div class="white-key ${active(n)?'active':''}"><small>${n.replace('2','')}</small>${labelFor(n)?`<span>${esc(labelFor(n))}</span>`:''}${blackAt[i]?`<i class="black-key"></i>`:''}</div>`).join('')}</div></section>`;
  }
  if(visual.type==='bass'){
    const strings=['G','D','A','E'];
    return `<section class="lesson-block lesson-visual">${title}<div class="bass-board"><div class="fret-head"></div>${[0,1,2,3,4,5].map(f=>`<div class="fret-number">${f}</div>`).join('')}${strings.map(s=>`<div class="bass-row"><strong>${s}</strong>${[0,1,2,3,4,5].map(f=>{const d=visual.dots.find(x=>x.string===s&&x.fret===f);return `<span>${d?`<b>${esc(d.label)}</b>`:''}</span>`}).join('')}</div>`).join('')}</div></section>`;
  }
  return '';
}

function openImageLightbox(src,alt){
  let box=document.querySelector('.image-lightbox');
  if(!box){box=document.createElement('div');box.className='image-lightbox';box.innerHTML='<button aria-label="Fechar">✕</button><img alt="">';document.body.appendChild(box);box.addEventListener('click',e=>{if(e.target===box||e.target.tagName==='BUTTON')box.classList.remove('open')});}
  box.querySelector('img').src=src;box.querySelector('img').alt=alt||'';box.classList.add('open');
}


function renderLessonPage(){
  const params=new URLSearchParams(location.search);
  const courseId=params.get("curso");
  const lessonIndex=Number(params.get("aula"))-1;
  const course=window.SOS_CURSOS?.[courseId];
  const lesson=course?.lessons?.[lessonIndex];
  const shell=document.querySelector("#lessonShell");
  if(!shell) return;

  if(course && !courseIsReleased(courseId)){
    shell.innerHTML=comingSoonMarkup(course);
    return;
  }

  if(!course || !lesson){
    shell.innerHTML='<div class="empty">Aula não encontrada. Volte à formação musical.</div>';
    return;
  }
  document.title=`${lesson[0]} | ${course.title} | S.O.S`;
  const [title,objective,topics,practice,homework,visual]=lesson;
  shell.innerHTML=`
    <div class="lesson-page">
      <span class="kicker">${esc(course.title)} • Aula ${String(lessonIndex+1).padStart(2,"0")}</span>
      <h1 class="title">${esc(title)}</h1>
      <p class="subtitle">${esc(objective)}</p>
      <div class="lesson-meta">
        <span class="tag">Duração sugerida: 45–60 min</span>
        <span class="tag">Aula ${lessonIndex+1} de ${course.lessons.length}</span>
      </div>
      <section class="lesson-block">
        <h2>Objetivo da aula</h2>
        <p>${esc(objective)}</p>
      </section>
      <section class="lesson-block">
        <h2>Conteúdo</h2>
        <ul>${topics.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>
      </section>
      ${renderVisual(visual)}
      <section class="lesson-block">
        <h2>Prática orientada</h2>
        <ul>${practice.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>
      </section>
      <section class="lesson-block">
        <h2>Atividade para casa</h2>
        <p>${esc(homework)}</p>
      </section>
      <div class="info"><strong>Orientação:</strong> avance somente quando o exercício estiver confortável. A qualidade e a regularidade são mais importantes que a velocidade.</div>
      <nav class="lesson-nav">
        ${lessonIndex>0?`<a href="aula.html?curso=${courseId}&aula=${lessonIndex}">← Aula anterior</a>`:'<span></span>'}
        <a href="curso-${courseId}.html">Voltar ao curso</a>
        ${lessonIndex<course.lessons.length-1?`<a href="aula.html?curso=${courseId}&aula=${lessonIndex+2}">Próxima aula →</a>`:'<span></span>'}
      </nav>
    </div>`;
  shell.querySelectorAll('.zoomable').forEach(img=>img.addEventListener('click',()=>openImageLightbox(img.src,img.alt)));
}



async function loadEmbeddedPdf(item){
  const overlay=document.createElement("div");
  overlay.className="pdf-loading";
  overlay.innerHTML=`<div><strong>Preparando o PDF...</strong><span>${esc(item.titulo)}</span></div>`;
  document.body.appendChild(overlay);

  try{
    window.SOS_PDF_DATA=window.SOS_PDF_DATA||{};
    if(!window.SOS_PDF_DATA[item.id]){
      await new Promise((resolve,reject)=>{
        const script=document.createElement("script");
        script.src=item.pdfScript;
        script.onload=resolve;
        script.onerror=()=>reject(new Error("Não foi possível carregar o PDF."));
        document.head.appendChild(script);
      });
    }

    const encoded=window.SOS_PDF_DATA[item.id];
    if(!encoded) throw new Error("Arquivo do PDF não encontrado.");
    const binary=atob(encoded);
    const bytes=new Uint8Array(binary.length);
    for(let i=0;i<binary.length;i++) bytes[i]=binary.charCodeAt(i);
    const blob=new Blob([bytes],{type:"application/pdf"});
    const url=URL.createObjectURL(blob);
    const opened=window.open(url,"_blank","noopener");
    if(!opened) location.href=url;
    setTimeout(()=>URL.revokeObjectURL(url),120000);
  }catch(error){
    alert(error.message || "Não foi possível abrir o PDF.");
  }finally{
    overlay.remove();
  }
}

function renderFolhas(){
  const host=document.querySelector("#resourceList");
  if(!host) return;
  const groups=window.SOS_FOLHAS_GRUPOS||[];
  const rows=window.SOS_FOLHAS||[];
  const search=document.querySelector("#search");
  const jump=document.querySelector("#seasonJump");

  if(jump){
    jump.innerHTML=`<button class="active" data-season="todos">Todas</button>`+
      groups.map(group=>`<button data-season="${esc(group.id)}">${esc(group.nome)}</button>`).join("");
  }

  let activeSeason="todos";

  function draw(){
    const term=(search?.value||"").trim().toLowerCase();
    const normalized=(value)=>String(value||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
    const wanted=normalized(term);

    const visibleGroups=groups.filter(group=>activeSeason==="todos"||group.id===activeSeason);
    host.innerHTML=visibleGroups.map(group=>{
      const items=rows.filter(item=>{
        if(item.grupo!==group.id) return false;
        if(!wanted) return true;
        return normalized(`${item.titulo} ${item.tempo} ${item.descricao}`).includes(wanted);
      });

      const content=items.length
        ? items.map(item=>`
          <article class="sheet-card" data-flip-id="sheet-${esc(item.id)}">
            <span class="tag">${esc(item.tempo)}</span>
            <h3>${esc(item.titulo)}</h3>
            <p>${esc(item.descricao||"Folha de cantos preparada pelo S.O.S.")}</p>
            <div class="sheet-actions">
              <button class="open-pdf" type="button" data-pdf-id="${esc(item.id)}">Abrir PDF</button>
              ${item.playlist
                ? `<a class="open-playlist" href="${esc(item.playlist)}" target="_blank" rel="noopener">Ouvir playlist</a>`
                : `<span class="disabled">Sem playlist</span>`}
            </div>
          </article>`).join("")
        : `<div class="sheet-empty">${wanted ? "Nenhuma folha encontrada nesta seção." : "Materiais em breve."}</div>`;

      return `
        <section class="liturgical-group" data-season="${esc(group.id)}" data-flip-id="season-${esc(group.id)}">
          <header class="liturgical-group-header">
            <span class="liturgical-dot" aria-hidden="true"></span>
            <div><h2>${esc(group.nome)}</h2><p>${esc(group.descricao)}</p></div>
          </header>
          <div class="sheet-grid">${content}</div>
        </section>`;
    }).join("");

    host.querySelectorAll("[data-pdf-id]").forEach(button=>{
      button.addEventListener("click",()=>{
        const item=rows.find(row=>row.id===button.dataset.pdfId);
        if(item) loadEmbeddedPdf(item);
      });
    });
  }

  search?.addEventListener("input",draw);
  jump?.addEventListener("click",event=>{
    const button=event.target.closest("button[data-season]");
    if(!button) return;
    activeSeason=button.dataset.season;
    jump.querySelectorAll("button").forEach(x=>x.classList.toggle("active",x===button));
    draw();
  });

  draw();
}


function renderApostilas(){
  const list=document.querySelector("#apostilaList");
  if(!list) return;
  list.innerHTML=(window.SOS_APOSTILAS||[]).map(x=>`
    <article class="card">
      <div class="icon">📘</div>
      <span class="tag">${esc(x.tipo)}</span>
      <h3>${esc(x.titulo)}</h3>
      <p>${esc(x.descricao)}</p>
      ${x.arquivo?`<a class="small-btn" href="${esc(x.arquivo)}" target="_blank" rel="noopener">Abrir PDF</a>`:`<span class="small-btn disabled">PDF em breve</span>`}
    </article>`).join("");
}
