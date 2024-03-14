const quotes = [
    {
      arabic: 'وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ',
      english: 'And I did not create the jinn and mankind except to worship Me.',
      author: 'Quran - Surah Adh-Dhariyat (51:56)'
    },
    {
      arabic: 'وَلَا تَحْسَبَنَّ اللَّهَ غَافِلًا عَمَّا يَعْمَلُ الظَّالِمُونَ ۚ إِنَّمَا يُؤَخِّرُهُمْ لِيَوْمٍ تَشْخَصُ فِيهِ الْأَبْصَارُ',
      english: 'And never think that Allah is unaware of what the wrongdoers do. He only delays them for a Day when eyes will stare [in horror].',
      author: 'Quran - Surah Ibrahim (14:42)'
    },
    {
      arabic: 'وَلَا تَحْزَنْ عَلَيْهِمْ وَلَا تَكُ فِي ضَيْقٍ مِّمَّا يَمْكُرُونَ',
      english: 'And do not grieve over them or be in distress because of what they conspire.',
      author: 'Quran - Surah An-Naml (27:70)'
    },
    {
      arabic: 'وَلَا تَدْعُ مِن دُونِ اللَّهِ مَا لَا يَنفَعُكَ وَلَا يَضُرُّكَ ۖ فَإِن فَعَلْتَ فَإِنَّكَ إِذًا مِّنَ الظَّالِمِينَ',
      english: 'And do not invoke besides Allah that which neither benefits you nor harms you, for if you did, then indeed you would be of the wrongdoers.',
      author: 'Quran - Surah Yunus (10:106)'
    },
    {
      arabic: 'وَمَا كَانَ لِنَفْسٍ أَن تُؤْمِنَ إِلَّا بِإِذْنِ اللَّهِ ۚ وَيَجْعَلُ الرِّجْسَ عَلَى الَّذِينَ لَا يَعْقِلُونَ',
      english: 'And it is not for a soul to believe except by permission of Allah, and He will place defilement upon those who will not use reason.',
      author: 'Quran - Surah Yunus (10:100)'
    },
    {
      arabic: 'وَمَا أَصَابَكُم مِّن مُّصِيبَةٍ فَبِمَا كَسَبَتْ أَيْدِيكُمْ وَيَعْفُو عَن كَثِيرٍ',
      english: 'And whatever strikes you of disaster - it is for what your hands have earned; but He pardons much.',
      author: 'Quran - Surah Ash-Shura (42:30)'
    },
    {
      arabic: 'وَقُل رَّبِّ اغْفِرْ وَارْحَمْ وَأَنتَ خَيْرُ الرَّاحِمِينَ',
      english: 'And say, "My Lord, forgive and have mercy, and You are the best of the merciful."',
      author: 'Quran - Surah Al-Mu minun (23:118)'
    },
    {
      arabic: 'وَلَا تَحْسَبَنَّ الَّذِينَ قُتِلُوا فِي سَبِيلِ اللَّهِ أَمْوَاتًا ۚ بَلْ أَحْيَاءٌ عِندَ رَبِّهِمْ يُرْزَقُونَ',
      english: 'And do not think of those who have been killed in the cause of Allah as dead. Rather, they are alive with their Lord, receiving provision.',
      author: 'Quran - Surah Al-Imran (3:169)'
    },
    {
      arabic: 'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ',
      english: 'Unquestionably, by the remembrance of Allah hearts are assured.',
      author: 'Quran - Surah Ar-Rad (13:28)'
    }
  ];
  
          function getRandomQuranicQuote() {
              const randomIndex = Math.floor(Math.random() * quotes.length);
              const randomQuote = quotes[randomIndex];
              document.getElementById("arabic").textContent = randomQuote.arabic;
              document.getElementById("quote").textContent = randomQuote.english;
              document.getElementById("author").textContent = "- " + randomQuote.author;
              document.getElementById("quote-container").style.display = "flex";
          }
  
          window.onload = getRandomQuranicQuote;
  
          document.addEventListener("click", function(event) {
              document.getElementById("quote-container").style.display = "none";
          });
    
  