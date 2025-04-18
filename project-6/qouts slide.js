   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   let index = 0;

    function generatesquots(index)
    {
        document.getElementsByid("quote").innerhtml = `"${quotesdata[index].quote}"`
         document.getElementsByid("authorname").innerhtml = `"${quotesdata[index].author}"`
    }

    function previndex()
    {
        if(index == 0)
        {
            index = quotesdata.length - 1;
        }
        else
        {
            index --;

        }
        generatesquots(index);
    }


    function nextindex()
    {
        if(index >= quotesdata.length - 1)
        {
            index = 0;
        }
        else
        {
            index++;
        }
        generatesquots(index);
    }

    generatesquots(index);