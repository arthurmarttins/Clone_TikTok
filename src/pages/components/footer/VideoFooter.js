import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function VideoFooter() {
  return (
    <div className="VideoFooter">
      <div className="VideoFooter_text">
        <h3>@arthurmarttins_</h3>
        <p>Descrição do video</p>
        <div className="VideoFooter_music">
          <MusicNoteIcon className="VideoFooter_icon" />
          <div className="VideoFooterMusic_text">
            <p>Titulo da musica</p>
          </div>
          
        </div>
      </div>
      <img 
        className="VideoFooter_record"
        alt="imagem de um vinil girando"
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z"


      />
    </div>
  );
}

export default VideoFooter;
