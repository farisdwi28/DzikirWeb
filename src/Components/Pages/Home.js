import React, { useState, useEffect } from 'react'
import C from '../Image/C.jpg';
import './style.css';

function Home() {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const id = setInterval(() => setDateTime(new Date()), 1000);
        return () => {
            clearInterval(id);
        }
    }, []);

    return (
        <div id="main-div">
            <div className="padding">
                <h1 className="title">
                    ARABIC(<i>اَلسَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَا تُهُ</i>)
				</h1>
                <p className="subtitle">
                    Oleh Faris Dwi Ramadhan - {`${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`}
                </p>
                <hr className="container" />
                <p className="main-content">
                    <h1>Dzikir Pagi</h1>
                    <br />
                    <h3>1. Ayat Kursi</h3>
                    <br />
                    <b>
                        اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ، لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ، لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ، مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ، يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ
                        ، وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ
                        إِلاَّ بِمَا شَاءَ، وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ، وَلَا يَئُودُهُ حِفْظُهُمَا، وَهُوَ الْعَلِيُّ الْعَظِيمُ
                    </b>
                    <br />
                    Artinya:“Allah, tidak ada ilah (yang berhak disembah) melainkan Dia, yang hidup kekal lagi terus menerus mengurus (
                    makhluk-Nya). Dia tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa’at di sisi-Nya
                    tanpa seizin-Nya. Dia mengetahui apa-apa yang di hadapan mereka dan di belakang mereka. Mereka tidak mengetahui apa-apa dari ilmu Allah melainkan
                    apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dia tidak merasa berat memelihara keduanya. Dan Dia Maha Tinggi lagi Maha besar.”
                    <b>(QS. Al Baqarah: 255) (Dibaca 1 x)</b>
                    <br />
                    <br />
                    <h3>2. Membaca surat Al Ikhlas, Al Falaq, An Naas</h3>
                    <br />
                    <h4>1.Al-Ikhlas</h4>
                    <br />
                    <b>
                        قُلْ هُوَ اللَّهُ أَحَدٌ ﴿١﴾ اللَّهُ الصَّمَدُ ﴿٢﴾ لَمْ يَلِدْ وَلَمْ يُولَدْ ﴿٣﴾ وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ ﴿٤﴾
                    </b>
                    <br />
                    Artinya:“Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang. Katakanlah: Dialah Allah, Yang Maha Esa.
                    Allah adalah ilah yang bergantung kepada-Nya segala urusan.
                    Dia tidak beranak dan tiada pula diperanakkan, dan tidak ada seorang pun yang setara dengan Dia.” <b>(QS. Al Ikhlas: 1-4) (Dibaca 3 x)</b>
                    <br />
                    <br />
                    <h4>2.Al-Falaq</h4>
                    <br />
                    <b>
                        قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ﴿١﴾ مِن شَرِّ مَا خَلَقَ ﴿٢﴾ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ﴿٣﴾ وَمِن شَرِّ النَّفَّاثَاتِ فِى الْعُقَدِ ﴿٤﴾ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ ﴿٥﴾
                    </b>
                    <br />
                    Artinya:“Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang.
                    Katakanlah: Aku berlindung kepada Rabb yang menguasai Shubuh, dari kejahatan makhluk-Nya,
                    dan dari kejahatan malam apabila telah gelap gulita, dan dari kejahatan-kejahatan wanita tukang sihir yang menghembus pada buhul-buhul,
                    dan dari kejahatan orang yang dengki apabila ia dengki”. <b>(QS. Al Falaq: 1-5) (Dibaca 3 x)</b>
                    <br />
                    <br />
                    <h4>3.An-Naas</h4>
                    <br />
                    <b>
                        قُلْ أَعُوذُ بِرَبِّ النَّاسِ ﴿١﴾ مَلِكِ النَّاسِ ﴿٢﴾ إِلَـٰهِ النَّاسِ ﴿٣﴾ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ﴿٤﴾ الَّذِى يُوَسْوِسُ فِى صُدُورِ النَّاسِ ﴿٥﴾ مِنَ الْجِنَّةِ وَالنَّاسِ ﴿٦﴾
                    </b>
                    <br />
                    Artinya:“Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang.
                    Katakanlah: Aku berlindung kepada Rabb manusia. Raja manusia. Sembahan manusia,
                    dari kejahatan (bisikan) syaitan yang biasa bersembunyi, yang membisikkan (kejahatan) ke dalam dada manusia,
                    dari jin dan manusia.” <b>(QS. An Naas: 1-6) (Dibaca 3 x)</b>
                    <br />
                    <br />
                    <h3>3. Memohon Kebaikan Pada Hari Itu dan Berlindung Dari Keburukan</h3>
                    <br />
                    <b>
                        أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَـٰهَ إِلاَّ اللَّهُ، وَحْدَهُ لاَ شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيْرٌ. رَبِّ أَسْأَلُكَ خَيْرَ مَا فِيْ هَـٰذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ
                        ، وَأَعُوْذُ بِكَ مِنْ شَرِّ مَا فِيْ هَـٰذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوْذُ بِكَ مِنَ الْكَسَلِ وَسُوْءِ الْكِبَرِ، رَبِّ أَعُوْذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ
                    </b>
                    <br />
                    Artinya:“Kami telah memasuki waktu pagi dan kerajaan hanya milik Allah,
                    segala puji bagi Allah. Tidak ada ilah (yang berhak disembah) kecuali Allah semata,
                    tiada sekutu bagi-Nya. Milik Allah kerajaan dan bagi-Nya pujian. Dia-lah Yang Mahakuasa atas segala sesuatu.
                    Wahai Rabbku, aku mohon kepada-Mu kebaikan di hari ini dan kebaikan sesudahnya. Aku berlindung kepada-Mu dari kejahatan hari ini
                    dan kejahatan sesudahnya. Wahai Rabbku, aku berlindung kepada-Mu dari kemalasan dan kejelekan di hari tua. Wahai Rabbku,
                    aku berlindung kepada-Mu dari siksaan di neraka dan siksaan di alam kubur.” <b>(Dibaca 1 x)</b>
                    <br />
                    <br />
                    <h3>4. Pernyataan Pasrah Hidup dan Mati Hanya Kepada Allah Semata</h3>
                    <br />
                    <b>
                        اَللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوْتُ، وَإِلَيْكَ النُّشُوْرُ
                    </b>
                    <br />
                    Artinya:“Ya Allah, dengan rahmat dan pertolongan-Mu kami memasuki waktu pagi,
                    dan dengan rahmat dan pertolongan-Mu kami memasuki waktu petang. Dengan rahmat
                    dan pertolongan-Mu kami hidup dan dengan kehendak-Mu kami mati. Dan kepada-Mu kebangkitan (bagi semua makhluk).” <b>(Dibaca 1 x)</b>
                    <br />
                    <br />
                    <h3>5. Membaca Sayyidul Istighfar</h3>
                    <br />
                    <b>
                        اَللَّهُمَّ أَنْتَ رَبِّيْ، لاَ إِلَـٰهَ إِلاَّ أَنْتَ، خَلَقْتَنِيْ، وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوْذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوْءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوْءُ لَكَ بِذَنْبِيْ، فَاغْفِرْ لِيْ، فَإِنَّهُ لاَ يَغْفِرُ الذُّنُوْبَ إِلاَّ أَنْتَ
                    </b>
                    <br />
                    Artinya:“Ya Allah, Engkau adalah Rabbku, tidak ada ilah yang berhak disembah kecuali Engkau,
                    Engkaulah yang menciptakanku. Aku adalah hamba-Mu. Aku akan setia pada perjanjianku pada-Mu
                    (yaitu aku akan mentauhidkan-Mu) semampuku dan aku yakin akan janji-Mu (berupa surga untukku).
                    Aku berlindung kepada-Mu dari kejelekan yang kuperbuat. Aku mengakui nikmat-Mu kepadaku dan aku mengakui dosaku.
                    Oleh karena itu, ampunilah aku. Sesungguhnya tiada yang mengampuni dosa kecuali Engkau.” <b>(Dibaca 1 x)</b>
                    <br />
                    <br />
                    <h3>6. Berdoa Memohon Keselamatan, dan Berlindung Dari Kekufuran, Kefakiran dan Azab Kubur</h3>
                    <br />
                    <b>
                        اَللَّهُمَّ عَافِنِيْ فِيْ بَدَنِيْ، اَللَّهُمَّ عَافِنِيْ فِيْ سَمْعِيْ، اَللَّهُمَّ عَافِنِيْ فِيْ بَصَرِيْ، لاَ إِلَـٰهَ إِلاَّ أَنْتَ. اَللَّهُمَّ إِنِّي أَعُوْذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ، اَللَّهُمَّ إِنِّي أَعُوْذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لاَ إِلَـٰهَ إِلاَّ أَنْتَ
                    </b>
                    <br />
                    Artinya:"Ya Allah, selamatkan tubuhku (dari penyakit dan yang tidak aku inginkan). Ya Allah,
                    selamatkan pendengaranku (dari penyakit dan maksiat atau sesuatu yang tidak aku inginkan).
                    Ya Allah, selamatkan penglihatanku, tidak ada sesembahan yang berhak disembah kecuali Engkau. Ya Allah,
                    sesungguhnya aku berlindung kepadaMu dari kekufuran dan kefakiran. Ya Allah, aku berlindung kepadaMu dari siksa kubur,
                    tidak ada sesembahan yang berhak disembah kecuali Engkau."<b>(Dibaca 3 x)</b>
                    <br />
                    <br />
                    <h3>7. Berdoa Memohon Keselamatan, dan Berlindung Dari </h3>
                    <br />
                    <b>
                        اَللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ، اَللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي، اَللَّهُمَّ اسْتُرْ عَوْرَاتِي، وَآمِنْ رَوْعَاتِي،
                         اَللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ، وَمِنْ خَلْفِي، وَعَنْ يَمِينِي، وَعَنْ شِمَالِي، وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي
                    </b>
                    <br />
                    Artinya:"Ya Allah, sesungguhnya aku memohon maaf (ampunan) dan keselamatan di dunia dan akhirat. Ya Allah,
                    sesungguhnya aku memohon maaf (ampunan) dan keselamatan dalam agama, dunia, keluarga dan hartaku.
                    Ya Allah, tutupilah auratku (aurat badan, cacat, aib dan sesuatu yang tidak layak dilihat orang)
                    dan tenteramkanlah aku dari rasa takut. Ya Allah, peliharalah aku dari muka, belakang, kanan, kiri dan atasku.
                    Aku berlindung dengan kebesaranMu, agar aku tidak disambar dari bawahku (oleh ulat, tenggelam atau ditelan bumi dan lain-lain)."<b>(Dibaca 1 x)</b>
                    <br />
                    <br />
                    <h3>8. Memohon Perlindungan Dari Keburukan Jiwa, Setan dan Perbuatan Maksiat </h3>
                    <br />
                    <b>
                        اَللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ، فَاطِرَ السَّمَاوَاتِ وَاْلأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيْكَهُ
                        ، أَشْهَدُ أَنْ لاَ إِلَـٰهَ إِلاَّ أَنْتَ، أَعُوْذُ بِكَ مِنْ شَرِّ نَفْسِيْ، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِيْ سُوْءًا، أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ
                    </b>
                    <br />
                    Artinya:"Ya Allah, yang Maha Mengetahui yang ghaib dan yang nyata, wahai Tuhan pencipta langit dan bumi,
                    Tuhan segala sesuatu dan yang merajainya. Aku bersaksi bahwa tidak ada sesembahan yang berhak disembah kecuali Engkau.
                    Aku berlindung kepadaMu dari kejahatan diriku, setan dan balatentaranya, dan aku (berlindung kepadaMu)
                    dari berbuat kejelekan terhadap diriku atau mendorongnya kepada seorang muslim."<b>(Dibaca 1 x)</b>
                    <br />
                    <br />
                    <h3>9. Memohon Perlindungan Dari Segala Sesuatu Yang Membahayakan </h3>
                    <br />
                    <b>
                        بِسْمِ اللَّهِ الَّذِى لاَ يَضُرُّ مَعَ اسْمِهِ شَىْءٌ فِى الأَرْضِ وَلاَ فِى السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ
                    </b>
                    <br />
                    Artinya:“Dengan nama Allah yang bila disebut, segala sesuatu di bumi dan langit tidak akan
                    berbahaya, Dia-lah Yang Maha Mendengar lagi Maha Mengetahui.” <b>(Dibaca 3 x)</b>
                    <br />
                    <br />
                    <h3>10. Pernyataan Ridha Terhadap Allah,Islam dan Nabi Muhammad <b>ﷺ</b> </h3>
                    <br />
                    <b>
                        رَضِيْتُ بِاللَّهِ رَبًّا، وَبِاْلإِسْلاَمِ دِيْنًا، وَبِمُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا
                    </b>
                    <br />
                    Artinya:“Aku ridha Allah sebagai Rabb, Islam sebagai agama dan Muhammad shallallahu ‘alaihi wa sallam sebagai nabi.” <b>(Dibaca 3 x)</b>
                    <br />
                    <br />
                    <h3>11. Memohon Diperbaiki Segala Urusan  </h3>
                    <br />
                    <b>
                    يَا حَيُّ يَا قَيُّوْمُ بِرَحْمَتِكَ أَسْتَغِيْثُ، وَأَصْلِحْ لِيْ شَأْنِيْ كُلَّهُ وَلاَ تَكِلْنِيْ إِلَى نَفْسِيْ طَرْفَةَ عَيْنٍ
                    </b>
                    <br />
                    Artinya:“Wahai Rabb Yang Maha Hidup, wahai Rabb Yang Berdiri Sendiri (tidak butuh segala sesuatu), dengan rahmat-Mu aku minta pertolongan,
                    perbaikilah segala urusanku dan jangan diserahkan kepadaku sekali pun sekejap mata (tanpa mendapat pertolongan dariMu).” <b>(Dibaca 1 x)</b>
                    <br />
                    <br />
                    <h3>12. Persaksian Sebagai Seorang Muslim Yang Lurus di Atas Fitrah  </h3>
                    <br />
                    <b>
                        أَصْبَحْنَا عَلَى فِطْرَةِ اْلإِسْلاَمِ، وَعَلَى كَلِمَةِ اْلإِخْلاَصِ، وَعَلَى دِيْنِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ، وَعَلَى مِلَّةِ أَبِيْنَا إِبْرَاهِيْمَ، حَنِيْفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِيْنَ
                    </b>
                    <br />
                    Artinya:“Di waktu pagi kami memegang agama Islam, kalimat ikhlas (kalimat syahadat), agama Nabi kami Muhammad shallallahu ‘alaihi wa sallam,
                    dan agama bapak kami Ibrahim, yang berdiri di atas jalan yang lurus, muslim dan tidak tergolong orang-orang musyrik.” <b>(Dibaca 1 x di pagi hari saja)</b>
                    <br />
                    <br />
                    <h3>13. Menyucikan dan Memuji Allah SWT </h3>
                    <br />
                    <b>
                        سُبْحَانَ اللَّهِ وَبِحَمْدِهِ
                    </b>
                    <br />
                    Artinya:“Maha suci Allah, aku memuji-Nya.” <b>(Dibaca 100 x)</b>
                    <br />
                    <br />
                    <h3>14. Perkataan Terbaik Para Nabi </h3>
                    <br />
                    <b>
                        لاَ إِلَـهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيْرُ
                    </b>
                    <br />
                    Artinya:“Tidak ada yang berhak disembah selain Allah semata,
                    tidak ada sekutu bagiNya. Bagi-Nya kerajaan dan segala pujian. Dia-lah yang berkuasa atas segala sesuatu.” <b>(Dibaca 10 x)</b>
                    <br />
                    <br />
                    <h3>15. Mengucapkan Tasbih dan Tahmid dalam Jumlah Tak Terhingga </h3>
                    <br />
                    <b>
                        سُبْحَانَ اللَّهِ وَبِحَمْدِهِ عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ
                    </b>
                    <br />
                    Artinya:“Maha Suci Allah, aku memujiNya sebanyak makhluk-Nya, sejauh kerelaan-Nya,
                    seberat timbangan ‘Arsy-Nya dan sebanyak tinta tulisan kalimat-Nya.” <b>(Dibaca 3 x di waktu pagi saja)</b>
                    <br />
                    <br />
                    <h3>16. Memohon Ilmu, Rizki dan Amal Shalih </h3>
                    <br />
                    <b>
                        اَللَّهُمَّ إِنِّيْ أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلاً مُتَقَبَّلاً
                    </b>
                    <br />
                    Artinya:“Ya Allah, sungguh aku memohon kepada-Mu ilmu yang bermanfaat (bagi diriku dan orang lain),
                    rizki yang halal dan amal yang diterima (di sisi-Mu dan mendapatkan ganjaran yang baik).” <b>(Dibaca 1 x)</b>
                    <br />
                    <br />
                    <h3>17. Membaca Istighfar dan Bertaubat </h3>
                    <br />
                    <b>
                        أَسْتَغْفِرُ اللهَ وَأَتُوْبُ إِلَيْهِ
                    </b>
                    <br />
                    Artinya:“Aku memohon ampun kepada Allah dan bertobat kepada-Nya.” <b>(Dibaca 100 x dalam sehari)</b>
                    <br />
                    <br />
                    <br />
                    <br />
                </p>
            </div>
            <div id="main-div2">
                <div className="padding">
                    <h1 className="title">
                        {`${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`}
                    </h1>
                    <p className="subtitle2">
                        <hr className="container" />
                    </p>
                    <p className="main-content">
                        <h1>Dzikir Petang</h1>
                        <br />
                        <h3>1. Ayat Kursi</h3>
                        <br />
                        <b>
                            اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ، لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ، لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ، مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ، يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ
                            ، وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ
                            إِلاَّ بِمَا شَاءَ، وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ، وَلَا يَئُودُهُ حِفْظُهُمَا، وَهُوَ الْعَلِيُّ الْعَظِيمُ
                    </b>
                        <br />
                    Artinya:“Allah, tidak ada ilah (yang berhak disembah) melainkan Dia, yang hidup kekal lagi terus menerus mengurus (
                    makhluk-Nya). Dia tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa’at di sisi-Nya
                    tanpa seizin-Nya. Dia mengetahui apa-apa yang di hadapan mereka dan di belakang mereka. Mereka tidak mengetahui apa-apa dari ilmu Allah melainkan
                    apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dia tidak merasa berat memelihara keduanya. Dan Dia Maha Tinggi lagi Maha besar.”
                    <b>(QS. Al Baqarah: 255) (Dibaca 1 x)</b>
                        <br />
                        <br />
                        <h3>2. Membaca surat Al Ikhlas, Al Falaq, An Naas</h3>
                        <br />
                        <h4>1.Al-Ikhlas</h4>
                        <br />
                        <b>
                            قُلْ هُوَ اللَّهُ أَحَدٌ ﴿١﴾ اللَّهُ الصَّمَدُ ﴿٢﴾ لَمْ يَلِدْ وَلَمْ يُولَدْ ﴿٣﴾ وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ ﴿٤﴾
                    </b>
                        <br />
                    Artinya:“Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang. Katakanlah: Dialah Allah, Yang Maha Esa.
                    Allah adalah ilah yang bergantung kepada-Nya segala urusan.
                    Dia tidak beranak dan tiada pula diperanakkan, dan tidak ada seorang pun yang setara dengan Dia.” <b>(QS. Al Ikhlas: 1-4) (Dibaca 3 x)</b>
                        <br />
                        <br />
                        <h4>2.Al-Falaq</h4>
                        <br />
                        <b>
                            قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ﴿١﴾ مِن شَرِّ مَا خَلَقَ ﴿٢﴾ وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ﴿٣﴾ وَمِن شَرِّ النَّفَّاثَاتِ فِى الْعُقَدِ ﴿٤﴾ وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ ﴿٥﴾
                    </b>
                        <br />
                    Artinya:“Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang.
                    Katakanlah: Aku berlindung kepada Rabb yang menguasai Shubuh, dari kejahatan makhluk-Nya,
                    dan dari kejahatan malam apabila telah gelap gulita, dan dari kejahatan-kejahatan wanita tukang sihir yang menghembus pada buhul-buhul,
                    dan dari kejahatan orang yang dengki apabila ia dengki”. <b>(QS. Al Falaq: 1-5) (Dibaca 3 x)</b>
                        <br />
                        <br />
                        <h4>3.An-Naas</h4>
                        <br />
                        <b>
                            قُلْ أَعُوذُ بِرَبِّ النَّاسِ ﴿١﴾ مَلِكِ النَّاسِ ﴿٢﴾ إِلَـٰهِ النَّاسِ ﴿٣﴾ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ ﴿٤﴾ الَّذِى يُوَسْوِسُ فِى صُدُورِ النَّاسِ ﴿٥﴾ مِنَ الْجِنَّةِ وَالنَّاسِ ﴿٦﴾
                    </b>
                        <br />
                    Artinya:“Dengan menyebut nama Allah Yang Maha Pengasih lagi Maha Penyayang.
                    Katakanlah: Aku berlindung kepada Rabb manusia. Raja manusia. Sembahan manusia,
                    dari kejahatan (bisikan) syaitan yang biasa bersembunyi, yang membisikkan (kejahatan) ke dalam dada manusia,
                    dari jin dan manusia.” <b>(QS. An Naas: 1-6) (Dibaca 3 x)</b>
                        <br />
                        <br />
                        <h3>3. Memohon Kebaikan Pada Hari Itu dan Berlindung Dari Keburukan</h3>
                        <br />
                        <b>
                            أَمْسَيْنَا وَأَمْسَى الْمُلْكُ للهِ، وَالْحَمْدُ للهِ، لَا إِلَهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُبِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا، رَبِّ أَعُوذُبِكَ مِنَ الْكَسَلِ وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُبِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ
                    </b>
                        <br />
                    Artinya:“Kami telah memasuki waktu petang dan kerajaan hanya milik Allah, segala puji bagi Allah. Tidak ada ilah (yang berhak disembah) kecuali Allah semata,
                    tiada sekutu bagi-Nya. Milik Allah kerajaan dan bagi-Nya pujian. Dia-lah Yang Mahakuasa atas segala sesuatu.Wahai Rabbku,
                    aku mohon kepada-Mu kebaikan di malam ini dan kebaikan sesudahnya. Aku berlindung kepadaMu dari kejahatan malam ini dan kejahatan sesudahnya.
                    Wahai Rabbku, aku berlindung kepadaMu dari kemalasan dan kejelekan di hari tua. Wahai Rabbku, aku berlindung kepada-Mu dari siksaan
                    di neraka dan siksaan di kubur.” <b>(Dibaca 1 x)</b>
                        <br />
                        <br />
                        <h3>4. Pernyataan Pasrah Hidup dan Mati Hanya Kepada Allah Semata</h3>
                        <br />
                        <b>
                            اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا،وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيْرُ
                    </b>
                        <br />
                        “Ya Allah, dengan rahmat dan pertolongan-Mu kami memasuki waktu petang, dan dengan rahmat dan pertolongan-Mu kami memasuki waktu pagi.
                        Dengan rahmat dan pertolonganMu kami hidup dan dengan kehendakMu kami mati. Dan kepada-Mu tempat kembali (bagi semua makhluk).” <b>(Dibaca 1 x)</b> q
                    <br />
                        <br />
                        <h3>5. Membaca Sayyidul Istighfar</h3>
                        <br />
                        <b>
                            اَللَّهُمَّ أَنْتَ رَبِّيْ، لاَ إِلَـٰهَ إِلاَّ أَنْتَ، خَلَقْتَنِيْ، وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوْذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوْءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوْءُ لَكَ بِذَنْبِيْ، فَاغْفِرْ لِيْ، فَإِنَّهُ لاَ يَغْفِرُ الذُّنُوْبَ إِلاَّ أَنْتَ
                    </b>
                        <br />
                    Artinya:“Ya Allah, Engkau adalah Rabbku, tidak ada ilah yang berhak disembah kecuali Engkau,
                    Engkaulah yang menciptakanku. Aku adalah hamba-Mu. Aku akan setia pada perjanjianku pada-Mu
                    (yaitu aku akan mentauhidkan-Mu) semampuku dan aku yakin akan janji-Mu (berupa surga untukku).
                    Aku berlindung kepada-Mu dari kejelekan yang kuperbuat. Aku mengakui nikmat-Mu kepadaku dan aku mengakui dosaku.
                    Oleh karena itu, ampunilah aku. Sesungguhnya tiada yang mengampuni dosa kecuali Engkau.” <b>(Dibaca 1 x)</b>
                        <br />
                        <br />
                        <h3>6. Berdoa Memohon Keselamatan, dan Berlindung Dari Kekufuran, Kefakiran dan Azab Kubur</h3>
                        <br />
                        <b>
                            اَللَّهُمَّ عَافِنِيْ فِيْ بَدَنِيْ، اَللَّهُمَّ عَافِنِيْ فِيْ سَمْعِيْ، اَللَّهُمَّ عَافِنِيْ فِيْ بَصَرِيْ، لاَ إِلَـٰهَ إِلاَّ أَنْتَ. اَللَّهُمَّ إِنِّي أَعُوْذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ، اَللَّهُمَّ إِنِّي أَعُوْذُ بِكَ مِنْ عَذَابِ الْقَبْرِ، لاَ إِلَـٰهَ إِلاَّ أَنْتَ
                    </b>
                        <br />
                    Artinya:"Ya Allah, selamatkan tubuhku (dari penyakit dan yang tidak aku inginkan). Ya Allah,
                    selamatkan pendengaranku (dari penyakit dan maksiat atau sesuatu yang tidak aku inginkan).
                    Ya Allah, selamatkan penglihatanku, tidak ada sesembahan yang berhak disembah kecuali Engkau. Ya Allah,
                    sesungguhnya aku berlindung kepadaMu dari kekufuran dan kefakiran. Ya Allah, aku berlindung kepadaMu dari siksa kubur,
                    tidak ada sesembahan yang berhak disembah kecuali Engkau."<b>(Dibaca 3 x)</b>
                    <br />
                    <br />
                    <h3>7. Berdoa Memohon Keselamatan, dan Berlindung Dari </h3>
                    <br />
                    <b>
                        اَللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالْآخِرَةِ، اَللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي دِينِي وَدُنْيَايَ وَأَهْلِي وَمَالِي، اَللَّهُمَّ اسْتُرْ عَوْرَاتِي، وَآمِنْ رَوْعَاتِي،
                         اَللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ، وَمِنْ خَلْفِي، وَعَنْ يَمِينِي، وَعَنْ شِمَالِي، وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي
                    </b>
                    <br />
                    Artinya:"Ya Allah, sesungguhnya aku memohon maaf (ampunan) dan keselamatan di dunia dan akhirat. Ya Allah,
                    sesungguhnya aku memohon maaf (ampunan) dan keselamatan dalam agama, dunia, keluarga dan hartaku.
                    Ya Allah, tutupilah auratku (aurat badan, cacat, aib dan sesuatu yang tidak layak dilihat orang)
                    dan tenteramkanlah aku dari rasa takut. Ya Allah, peliharalah aku dari muka, belakang, kanan, kiri dan atasku.
                    Aku berlindung dengan kebesaranMu, agar aku tidak disambar dari bawahku (oleh ulat, tenggelam atau ditelan bumi dan lain-lain)."<b>(Dibaca 1 x)</b>
                    <br />
                    <br />
                    <h3>8. Memohon Perlindungan Dari Keburukan Jiwa, Setan dan Perbuatan Maksiat </h3>
                    <br />
                    <b>
                        اَللَّهُمَّ عَالِمَ الْغَيْبِ وَالشَّهَادَةِ، فَاطِرَ السَّمَاوَاتِ وَاْلأَرْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيْكَهُ
                        ، أَشْهَدُ أَنْ لاَ إِلَـٰهَ إِلاَّ أَنْتَ، أَعُوْذُ بِكَ مِنْ شَرِّ نَفْسِيْ، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِيْ سُوْءًا، أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ
                    </b>
                    <br />
                    Artinya:"Ya Allah, yang Maha Mengetahui yang ghaib dan yang nyata, wahai Tuhan pencipta langit dan bumi,
                    Tuhan segala sesuatu dan yang merajainya. Aku bersaksi bahwa tidak ada sesembahan yang berhak disembah kecuali Engkau.
                    Aku berlindung kepadaMu dari kejahatan diriku, setan dan balatentaranya, dan aku (berlindung kepadaMu)
                    dari berbuat kejelekan terhadap diriku atau mendorongnya kepada seorang muslim."<b>(Dibaca 1 x)</b>
                    <br />
                    <br />
                    <h3>9. Memohon Perlindungan Dari Segala Sesuatu Yang Membahayakan </h3>
                    <br />
                    <b>
                        بِسْمِ اللَّهِ الَّذِى لاَ يَضُرُّ مَعَ اسْمِهِ شَىْءٌ فِى الأَرْضِ وَلاَ فِى السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ
                    </b>
                    <br />
                    Artinya:“Dengan nama Allah yang bila disebut, segala sesuatu di bumi dan langit tidak akan
                    berbahaya, Dia-lah Yang Maha Mendengar lagi Maha Mengetahui.” <b>(Dibaca 3 x)</b>
                    <br />
                    <br />
                    <h3>10. Pernyataan Ridha Terhadap Allah,Islam dan Nabi Muhammad <b>ﷺ</b> </h3>
                    <br />
                    <b>
                        رَضِيْتُ بِاللَّهِ رَبًّا، وَبِاْلإِسْلاَمِ دِيْنًا، وَبِمُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا
                    </b>
                    <br />
                    Artinya:“Aku ridha Allah sebagai Rabb, Islam sebagai agama dan Muhammad shallallahu ‘alaihi wa sallam sebagai nabi.” <b>(Dibaca 3 x)</b>
                    <br />
                    <br />
                    <h3>11. Memohon Diperbaiki Segala Urusan  </h3>
                    <br />
                    <b>
                    يَا حَيُّ يَا قَيُّوْمُ بِرَحْمَتِكَ أَسْتَغِيْثُ، وَأَصْلِحْ لِيْ شَأْنِيْ كُلَّهُ وَلاَ تَكِلْنِيْ إِلَى نَفْسِيْ طَرْفَةَ عَيْنٍ
                    </b>
                    <br />
                    Artinya:“Wahai Rabb Yang Maha Hidup, wahai Rabb Yang Berdiri Sendiri (tidak butuh segala sesuatu), dengan rahmat-Mu aku minta pertolongan,
                    perbaikilah segala urusanku dan jangan diserahkan kepadaku sekali pun sekejap mata (tanpa mendapat pertolongan dariMu).” <b>(Dibaca 1 x)</b>
                    <br />
                    <br />
                    <h3>12. Menyucikan dan Memuji Allah SWT </h3>
                    <br />
                    <b>
                        سُبْحَانَ اللَّهِ وَبِحَمْدِهِ
                    </b>
                    <br />
                    Artinya:“Maha suci Allah, aku memuji-Nya.” <b>(Dibaca 100 x)</b>
                    <br />
                    <br />
                    <h3>13. Perkataan Terbaik Para Nabi </h3>
                    <br />
                    <b>
                        لاَ إِلَـهَ إِلاَّ اللهُ وَحْدَهُ لاَ شَرِيْكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيْرُ
                    </b>
                    <br />
                    Artinya:“Tidak ada yang berhak disembah selain Allah semata,
                    tidak ada sekutu bagiNya. Bagi-Nya kerajaan dan segala pujian. Dia-lah yang berkuasa atas segala sesuatu.” <b>(Dibaca 10 x)</b>
                    <br />
                    <br />
                    <h3>14. Berlindung Dari Segala Kejahatan Makhluk </h3>
                    <br />
                    <b>
                    أَعُوْذُ بِكَلِمَاتِ اللهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ
                    </b>
                    <br />
                    Artinya:“Aku berlindung dengan kalimat-kalimat Allah yang sempurna dari kejahatan makhluk yang diciptakanNya.” <b>(Dibaca 3 x pada waktu petang)</b>
                    <br />
                    <br />
                    <br />
                    <br />
                    </p>
                </div>
            </div>
        </div>
    );
}
export default Home
