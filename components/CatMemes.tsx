import React, { useState,useEffect, useRef } from 'react';


const CatMemes = () => {
    const [image, setImage] = useState<any | null>(null)
    const canvas = useRef<any | null>(null)
    const [topText, setTopText] = useState('')
    const [bottomText, setBottomText] = useState('')

    useEffect(() => {
        const catImage = new Image();
        catImage.src = "https://thiscatdoesnotexist.com/"
        catImage.onload = () => setImage(catImage)
    }, [])

    useEffect(() => {
        if (!canvas) return;

        if(image && canvas) {
            const ctx = canvas.current.getContext("2d")
            ctx.fillStyle = "black"
            ctx.fillRect(0, 0, 512, 512)
            ctx.drawImage(image, 0, 0)

            ctx.font = "50px Impact"
            ctx.fillStyle = "white"
            ctx.strokeStyle = 'black';
            ctx.lineWidth = 6;
            ctx.textAlign = "center"

            ctx.strokeText(topText, (512 / 2), 50)
            ctx.strokeText(bottomText, (512 / 2), 512 - 40)
            ctx.fillText(topText, (512 / 2), 50)
            ctx.fillText(bottomText, (512 / 2), 512 - 40)

        }
    }, [image, canvas, topText, bottomText])

    const getNewCat = () => {
        const catImage = new Image();
        catImage.src = "https://thiscatdoesnotexist.com/"
        catImage.onload = () => setImage(catImage)
    }

    return (
        <div>
    
          <div className="mx-auto my-4 max-w-xl">
            <button onClick={getNewCat} className="button mx-auto my-3 block">Get a New Cat</button>

          <label htmlFor="top_text" className="cat-label">Top Text</label>

          <input type="text"
              id="top_text"
              className="cat-input"
              value={topText}
              onChange={e => setTopText(e.target.value)}
            />
            <br />
            <canvas 
              id="canvas"
              className="mx-auto shadow"
              ref={canvas}
              width={512}
              height={512}
            />
            <br />
            <label htmlFor="bottom_text" className="cat-label">Bottom Text</label>

            <input type="text"
            
                id="bottom_text"
                className="cat-input"
              value={bottomText}
              onChange={e => setBottomText(e.target.value)}
            />
          </div>
    
        </div>
      )
}

export default CatMemes;