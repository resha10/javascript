const birthdayMonth = 5; 
        const birthdayDay = 10;
    
        function updateCountdown() 
        {
          const now = new Date();
          let nextBirthday = new Date(now.getFullYear(), birthdayMonth, birthdayDay);
    
          if (now > nextBirthday) 
        {
            nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
          }
    
          const timeDiff = nextBirthday - now;
    
          const days = Math.floor(timeDiff / (1000 * 60 *60 * 24));
          const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
          const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
          const seconds = Math.floor((timeDiff / 1000) % 60);
    
          document.getElementById('countdown').innerHTML =
            `${days}d ${hours}h ${minutes}m ${seconds}s`;
    
        
          setTimeout(updateCountdown, 1000);
        }
    
        updateCountdown();