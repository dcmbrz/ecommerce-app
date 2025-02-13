import React from "react"
import {Combobox} from "./BaseComponents/Combobox.jsx";

export default function SchoolSelector ({ onSelect }) {
    const schools = [
        {
            value: 5920372002,
            text: "Abraham Baldwin Agricultural College"
        },
        {
            value: 5920373002,
            text: "Academy of Art University"
        },
        {
            value: 5920374002,
            text: "Acadia University"
        },
        {
            value: 5920375002,
            text: "Adams State University"
        },
        {
            value: 5920376002,
            text: "Adelphi University"
        },
        {
            value: 5920377002,
            text: "Adrian College"
        },
        {
            value: 5920378002,
            text: "Adventist University of Health Sciences"
        },
        {
            value: 5920379002,
            text: "Agnes Scott College"
        },
        {
            value: 5920380002,
            text: "AIB College of Business"
        },
        {
            value: 5920381002,
            text: "Alaska Pacific University"
        },
        {
            value: 5920382002,
            text: "Albany College of Pharmacy and Health Sciences"
        },
        {
            value: 5920383002,
            text: "Albany State University"
        },
        {
            value: 5920384002,
            text: "Albertus Magnus College"
        },
        {
            value: 5920385002,
            text: "Albion College"
        },
        {
            value: 5920386002,
            text: "Albright College"
        },
        {
            value: 5920387002,
            text: "Alderson Broaddus University"
        },
        {
            value: 5920388002,
            text: "Alfred University"
        },
        {
            value: 5920389002,
            text: "Alice Lloyd College"
        },
        {
            value: 5920390002,
            text: "Allegheny College"
        },
        {
            value: 5920391002,
            text: "Allen College"
        },
        {
            value: 5920392002,
            text: "Allen University"
        },
        {
            value: 5920393002,
            text: "Alliant International University"
        },
        {
            value: 5920394002,
            text: "Alma College"
        },
        {
            value: 5920395002,
            text: "Alvernia University"
        },
        {
            value: 5920396002,
            text: "Alverno College"
        },
        {
            value: 5920397002,
            text: "Amberton University"
        },
        {
            value: 5920398002,
            text: "American Academy of Art"
        },
        {
            value: 5920399002,
            text: "American Indian College of the Assemblies of God"
        },
        {
            value: 5920400002,
            text: "American InterContinental University"
        },
        {
            value: 5920401002,
            text: "American International College"
        },
        {
            value: 5920402002,
            text: "American Jewish University"
        },
        {
            value: 5920403002,
            text: "American Public University System"
        },
        {
            value: 5920404002,
            text: "American University"
        },
        {
            value: 5920405002,
            text: "American University in Bulgaria"
        },
        {
            value: 5920406002,
            text: "American University in Cairo"
        },
        {
            value: 5920407002,
            text: "American University of Beirut"
        },
        {
            value: 5920408002,
            text: "American University of Paris"
        },
        {
            value: 5920409002,
            text: "American University of Puerto Rico"
        },
        {
            value: 5920410002,
            text: "Amherst College"
        },
        {
            value: 5920411002,
            text: "Amridge University"
        },
        {
            value: 5920412002,
            text: "Anderson University"
        },
        {
            value: 5920413002,
            text: "Andrews University"
        },
        {
            value: 5920414002,
            text: "Angelo State University"
        },
        {
            value: 5920415002,
            text: "Anna Maria College"
        },
        {
            value: 5920416002,
            text: "Antioch University"
        },
        {
            value: 5920417002,
            text: "Appalachian Bible College"
        },
        {
            value: 5920418002,
            text: "Aquinas College"
        },
        {
            value: 5920419002,
            text: "Arcadia University"
        },
        {
            value: 5920420002,
            text: "Argosy University"
        },
        {
            value: 5920421002,
            text: "Arizona Christian University"
        },
        {
            value: 5920422002,
            text: "Arizona State University - West"
        },
        {
            value: 5920423002,
            text: "Arkansas Baptist College"
        },
        {
            value: 5920424002,
            text: "Arkansas Tech University"
        },
        {
            value: 5920425002,
            text: "Armstrong Atlantic State University"
        },
        {
            value: 5920426002,
            text: "Art Academy of Cincinnati"
        },
        {
            value: 5920427002,
            text: "Art Center College of Design"
        },
        {
            value: 5920428002,
            text: "Art Institute of Atlanta"
        },
        {
            value: 5920429002,
            text: "Art Institute of Colorado"
        },
        {
            value: 5920430002,
            text: "Art Institute of Houston"
        },
        {
            value: 5920431002,
            text: "Art Institute of Pittsburgh"
        },
        {
            value: 5920432002,
            text: "Art Institute of Portland"
        },
        {
            value: 5920433002,
            text: "Art Institute of Seattle"
        },
        {
            value: 5920434002,
            text: "Asbury University"
        },
        {
            value: 5920435002,
            text: "Ashford University"
        },
        {
            value: 5920436002,
            text: "Ashland University"
        },
        {
            value: 5920437002,
            text: "Assumption College"
        },
        {
            value: 5920438002,
            text: "Athens State University"
        },
        {
            value: 5920439002,
            text: "Auburn University - Montgomery"
        },
        {
            value: 5920440002,
            text: "Augsburg College"
        },
        {
            value: 5920441002,
            text: "Augustana College"
        },
        {
            value: 5920442002,
            text: "Aurora University"
        },
        {
            value: 5920443002,
            text: "Austin College"
        },
        {
            value: 5920444002,
            text: "Alcorn State University"
        },
        {
            value: 5920445002,
            text: "Ave Maria University"
        },
        {
            value: 5920446002,
            text: "Averett University"
        },
        {
            value: 5920447002,
            text: "Avila University"
        },
        {
            value: 5920448002,
            text: "Azusa Pacific University"
        },
        {
            value: 5920449002,
            text: "Babson College"
        },
        {
            value: 5920450002,
            text: "Bacone College"
        },
        {
            value: 5920451002,
            text: "Baker College of Flint"
        },
        {
            value: 5920452002,
            text: "Baker University"
        },
        {
            value: 5920453002,
            text: "Baldwin Wallace University"
        },
        {
            value: 5920454002,
            text: "Christian Brothers University"
        },
        {
            value: 5920455002,
            text: "Abilene Christian University"
        },
        {
            value: 5920456002,
            text: "Arizona State University"
        },
        {
            value: 5920457002,
            text: "Auburn University"
        },
        {
            value: 5920458002,
            text: "Alabama A&M University"
        },
        {
            value: 5920459002,
            text: "Alabama State University"
        },
        {
            value: 5920460002,
            text: "Arkansas State University"
        },
        {
            value: 5920461002,
            text: "Baptist Bible College"
        },
        {
            value: 5920462002,
            text: "Baptist Bible College and Seminary"
        },
        {
            value: 5920463002,
            text: "Baptist College of Florida"
        },
        {
            value: 5920464002,
            text: "Baptist Memorial College of Health Sciences"
        },
        {
            value: 5920465002,
            text: "Baptist Missionary Association Theological Seminary"
        },
        {
            value: 5920466002,
            text: "Bard College"
        },
        {
            value: 5920467002,
            text: "Bard College at Simon's Rock"
        },
        {
            value: 5920468002,
            text: "Barnard College"
        },
        {
            value: 5920469002,
            text: "Barry University"
        },
        {
            value: 5920470002,
            text: "Barton College"
        },
        {
            value: 5920471002,
            text: "Bastyr University"
        },
        {
            value: 5920472002,
            text: "Bates College"
        },
        {
            value: 5920473002,
            text: "Bauder College"
        },
        {
            value: 5920474002,
            text: "Bay Path College"
        },
        {
            value: 5920475002,
            text: "Bay State College"
        },
        {
            value: 5920476002,
            text: "Bayamon Central University"
        },
        {
            value: 5920477002,
            text: "Beacon College"
        },
        {
            value: 5920478002,
            text: "Becker College"
        },
        {
            value: 5920479002,
            text: "Belhaven University"
        },
        {
            value: 5920480002,
            text: "Bellarmine University"
        },
        {
            value: 5920481002,
            text: "Bellevue College"
        },
        {
            value: 5920482002,
            text: "Bellevue University"
        },
        {
            value: 5920483002,
            text: "Bellin College"
        },
        {
            value: 5920484002,
            text: "Belmont Abbey College"
        },
        {
            value: 5920485002,
            text: "Belmont University"
        },
        {
            value: 5920486002,
            text: "Beloit College"
        },
        {
            value: 5920487002,
            text: "Bemidji State University"
        },
        {
            value: 5920488002,
            text: "Benedict College"
        },
        {
            value: 5920489002,
            text: "Benedictine College"
        },
        {
            value: 5920490002,
            text: "Benedictine University"
        },
        {
            value: 5920491002,
            text: "Benjamin Franklin Institute of Technology"
        },
        {
            value: 5920492002,
            text: "Bennett College"
        },
        {
            value: 5920493002,
            text: "Bennington College"
        },
        {
            value: 5920494002,
            text: "Bentley University"
        },
        {
            value: 5920495002,
            text: "Berea College"
        },
        {
            value: 5920496002,
            text: "Berkeley College"
        },
        {
            value: 5920497002,
            text: "Berklee College of Music"
        },
        {
            value: 5920498002,
            text: "Berry College"
        },
        {
            value: 5920499002,
            text: "Bethany College"
        },
        {
            value: 5920500002,
            text: "Bethany Lutheran College"
        },
        {
            value: 5920501002,
            text: "Bethel College"
        },
        {
            value: 5920502002,
            text: "Bethel University"
        },
        {
            value: 5920503002,
            text: "BI Norwegian Business School"
        },
        {
            value: 5920504002,
            text: "Binghamton University - SUNY"
        },
        {
            value: 5920505002,
            text: "Biola University"
        },
        {
            value: 5920506002,
            text: "Birmingham-Southern College"
        },
        {
            value: 5920507002,
            text: "Bismarck State College"
        },
        {
            value: 5920508002,
            text: "Black Hills State University"
        },
        {
            value: 5920509002,
            text: "Blackburn College"
        },
        {
            value: 5920510002,
            text: "Blessing-Rieman College of Nursing"
        },
        {
            value: 5920511002,
            text: "Bloomfield College"
        },
        {
            value: 5920512002,
            text: "Bloomsburg University of Pennsylvania"
        },
        {
            value: 5920513002,
            text: "Blue Mountain College"
        },
        {
            value: 5920514002,
            text: "Bluefield College"
        },
        {
            value: 5920515002,
            text: "Bluefield State College"
        },
        {
            value: 5920516002,
            text: "Bluffton University"
        },
        {
            value: 5920517002,
            text: "Boricua College"
        },
        {
            value: 5920518002,
            text: "Boston Architectural College"
        },
        {
            value: 5920519002,
            text: "Boston Conservatory"
        },
        {
            value: 5920520002,
            text: "Boston University"
        },
        {
            value: 5920521002,
            text: "Bowdoin College"
        },
        {
            value: 5920522002,
            text: "Bowie State University"
        },
        {
            value: 5920523002,
            text: "Bradley University"
        },
        {
            value: 5920524002,
            text: "Brandeis University"
        },
        {
            value: 5920525002,
            text: "Brandman University"
        },
        {
            value: 5920526002,
            text: "Brazosport College"
        },
        {
            value: 5920527002,
            text: "Brenau University"
        },
        {
            value: 5920528002,
            text: "Brescia University"
        },
        {
            value: 5920529002,
            text: "Brevard College"
        },
        {
            value: 5920530002,
            text: "Brewton-Parker College"
        },
        {
            value: 5920531002,
            text: "Briar Cliff University"
        },
        {
            value: 5920532002,
            text: "Briarcliffe College"
        },
        {
            value: 5920533002,
            text: "Bridgewater College"
        },
        {
            value: 5920534002,
            text: "Bridgewater State University"
        },
        {
            value: 5920535002,
            text: "Brigham Young University - Hawaii"
        },
        {
            value: 5920536002,
            text: "Brigham Young University - Idaho"
        },
        {
            value: 5920537002,
            text: "Brock University"
        },
        {
            value: 5920538002,
            text: "Bryan College"
        },
        {
            value: 5920539002,
            text: "Bryn Athyn College of the New Church"
        },
        {
            value: 5920540002,
            text: "Bryn Mawr College"
        },
        {
            value: 5920541002,
            text: "Boston College"
        },
        {
            value: 5920542002,
            text: "Buena Vista University"
        },
        {
            value: 5920543002,
            text: "Burlington College"
        },
        {
            value: 5920544002,
            text: "Bowling Green State University"
        },
        {
            value: 5920545002,
            text: "Brown University"
        },
        {
            value: 5920546002,
            text: "Appalachian State University"
        },
        {
            value: 5920547002,
            text: "Brigham Young University - Provo"
        },
        {
            value: 5920548002,
            text: "Boise State University"
        },
        {
            value: 5920549002,
            text: "Bethune-Cookman University"
        },
        {
            value: 5920550002,
            text: "Bryant University"
        },
        {
            value: 5920551002,
            text: "Cabarrus College of Health Sciences"
        },
        {
            value: 5920552002,
            text: "Cabrini College"
        },
        {
            value: 5920553002,
            text: "Cairn University"
        },
        {
            value: 5920554002,
            text: "Caldwell College"
        },
        {
            value: 5920555002,
            text: "California Baptist University"
        },
        {
            value: 5920556002,
            text: "California College of the Arts"
        },
        {
            value: 5920557002,
            text: "California Institute of Integral Studies"
        },
        {
            value: 5920558002,
            text: "California Institute of Technology"
        },
        {
            value: 5920559002,
            text: "California Institute of the Arts"
        },
        {
            value: 5920560002,
            text: "California Lutheran University"
        },
        {
            value: 5920561002,
            text: "California Maritime Academy"
        },
        {
            value: 5920562002,
            text: "California State Polytechnic University - Pomona"
        },
        {
            value: 5920563002,
            text: "California State University - Bakersfield"
        },
        {
            value: 5920564002,
            text: "California State University - Channel Islands"
        },
        {
            value: 5920565002,
            text: "California State University - Chico"
        },
        {
            value: 5920566002,
            text: "California State University - Dominguez Hills"
        },
        {
            value: 5920567002,
            text: "California State University - East Bay"
        },
        {
            value: 5920568002,
            text: "California State University - Fullerton"
        },
        {
            value: 5920569002,
            text: "California State University - Los Angeles"
        },
        {
            value: 5920570002,
            text: "California State University - Monterey Bay"
        },
        {
            value: 5920571002,
            text: "California State University - Northridge"
        },
        {
            value: 5920572002,
            text: "California State University - San Bernardino"
        },
        {
            value: 5920573002,
            text: "California State University - San Marcos"
        },
        {
            value: 5920574002,
            text: "California State University - Stanislaus"
        },
        {
            value: 5920575002,
            text: "California University of Pennsylvania"
        },
        {
            value: 5920576002,
            text: "Calumet College of St. Joseph"
        },
        {
            value: 5920577002,
            text: "Calvary Bible College and Theological Seminary"
        },
        {
            value: 5920578002,
            text: "Calvin College"
        },
        {
            value: 5920579002,
            text: "Cambridge College"
        },
        {
            value: 5920580002,
            text: "Cameron University"
        },
        {
            value: 5920581002,
            text: "Campbellsville University"
        },
        {
            value: 5920582002,
            text: "Canisius College"
        },
        {
            value: 5920583002,
            text: "Capella University"
        },
        {
            value: 5920584002,
            text: "Capital University"
        },
        {
            value: 5920585002,
            text: "Capitol College"
        },
        {
            value: 5920586002,
            text: "Cardinal Stritch University"
        },
        {
            value: 5920587002,
            text: "Caribbean University"
        },
        {
            value: 5920588002,
            text: "Carleton College"
        },
        {
            value: 5920589002,
            text: "Carleton University"
        },
        {
            value: 5920590002,
            text: "Carlos Albizu University"
        },
        {
            value: 5920591002,
            text: "Carlow University"
        },
        {
            value: 5920592002,
            text: "Carnegie Mellon University"
        },
        {
            value: 5920593002,
            text: "Carroll College"
        },
        {
            value: 5920594002,
            text: "Carroll University"
        },
        {
            value: 5920595002,
            text: "Carson-Newman University"
        },
        {
            value: 5920596002,
            text: "Carthage College"
        },
        {
            value: 5920597002,
            text: "Case Western Reserve University"
        },
        {
            value: 5920598002,
            text: "Castleton State College"
        },
        {
            value: 5920599002,
            text: "Catawba College"
        },
        {
            value: 5920600002,
            text: "Cazenovia College"
        },
        {
            value: 5920601002,
            text: "Cedar Crest College"
        },
        {
            value: 5920602002,
            text: "Cedarville University"
        },
        {
            value: 5920603002,
            text: "Centenary College"
        },
        {
            value: 5920604002,
            text: "Centenary College of Louisiana"
        },
        {
            value: 5920605002,
            text: "Central Baptist College"
        },
        {
            value: 5920606002,
            text: "Central Bible College"
        },
        {
            value: 5920607002,
            text: "Central Christian College"
        },
        {
            value: 5920608002,
            text: "Central College"
        },
        {
            value: 5920609002,
            text: "Central Methodist University"
        },
        {
            value: 5920610002,
            text: "Central Penn College"
        },
        {
            value: 5920611002,
            text: "Central State University"
        },
        {
            value: 5920612002,
            text: "Central Washington University"
        },
        {
            value: 5920613002,
            text: "Centre College"
        },
        {
            value: 5920614002,
            text: "Chadron State College"
        },
        {
            value: 5920615002,
            text: "Chamberlain College of Nursing"
        },
        {
            value: 5920616002,
            text: "Chaminade University of Honolulu"
        },
        {
            value: 5920617002,
            text: "Champlain College"
        },
        {
            value: 5920618002,
            text: "Chancellor University"
        },
        {
            value: 5920619002,
            text: "Chapman University"
        },
        {
            value: 5920620002,
            text: "Charles R. Drew University of Medicine and Science"
        },
        {
            value: 5920621002,
            text: "Charter Oak State College"
        },
        {
            value: 5920622002,
            text: "Chatham University"
        },
        {
            value: 5920623002,
            text: "Chestnut Hill College"
        },
        {
            value: 5920624002,
            text: "Cheyney University of Pennsylvania"
        },
        {
            value: 5920625002,
            text: "Chicago State University"
        },
        {
            value: 5920626002,
            text: "Chipola College"
        },
        {
            value: 5920627002,
            text: "Chowan University"
        },
        {
            value: 5920628002,
            text: "Christendom College"
        },
        {
            value: 5920629002,
            text: "Baylor University"
        },
        {
            value: 5920630002,
            text: "Central Connecticut State University"
        },
        {
            value: 5920631002,
            text: "Central Michigan University"
        },
        {
            value: 5920632002,
            text: "Charleston Southern University"
        },
        {
            value: 5920633002,
            text: "California State University - Sacramento"
        },
        {
            value: 5920634002,
            text: "California State University - Fresno"
        },
        {
            value: 5920635002,
            text: "Campbell University"
        },
        {
            value: 5920636002,
            text: "Christopher Newport University"
        },
        {
            value: 5920637002,
            text: "Cincinnati Christian University"
        },
        {
            value: 5920638002,
            text: "Cincinnati College of Mortuary Science"
        },
        {
            value: 5920639002,
            text: "City University of Seattle"
        },
        {
            value: 5920640002,
            text: "Claflin University"
        },
        {
            value: 5920641002,
            text: "Claremont McKenna College"
        },
        {
            value: 5920642002,
            text: "Clarion University of Pennsylvania"
        },
        {
            value: 5920643002,
            text: "Clark Atlanta University"
        },
        {
            value: 5920644002,
            text: "Clark University"
        },
        {
            value: 5920645002,
            text: "Clarke University"
        },
        {
            value: 5920646002,
            text: "Clarkson College"
        },
        {
            value: 5920647002,
            text: "Clarkson University"
        },
        {
            value: 5920648002,
            text: "Clayton State University"
        },
        {
            value: 5920649002,
            text: "Clear Creek Baptist Bible College"
        },
        {
            value: 5920650002,
            text: "Clearwater Christian College"
        },
        {
            value: 5920651002,
            text: "Cleary University"
        },
        {
            value: 5920652002,
            text: "College of William and Mary"
        },
        {
            value: 5920653002,
            text: "Cleveland Chiropractic College"
        },
        {
            value: 5920654002,
            text: "Cleveland Institute of Art"
        },
        {
            value: 5920655002,
            text: "Cleveland Institute of Music"
        },
        {
            value: 5920656002,
            text: "Cleveland State University"
        },
        {
            value: 5920657002,
            text: "Coe College"
        },
        {
            value: 5920658002,
            text: "Cogswell Polytechnical College"
        },
        {
            value: 5920659002,
            text: "Coker College"
        },
        {
            value: 5920660002,
            text: "Colby College"
        },
        {
            value: 5920661002,
            text: "Colby-Sawyer College"
        },
        {
            value: 5920662002,
            text: "College at Brockport - SUNY"
        },
        {
            value: 5920663002,
            text: "College for Creative Studies"
        },
        {
            value: 5920664002,
            text: "College of Charleston"
        },
        {
            value: 5920665002,
            text: "College of Idaho"
        },
        {
            value: 5920666002,
            text: "College of Mount St. Joseph"
        },
        {
            value: 5920667002,
            text: "College of Mount St. Vincent"
        },
        {
            value: 5920668002,
            text: "College of New Jersey"
        },
        {
            value: 5920669002,
            text: "College of New Rochelle"
        },
        {
            value: 5920670002,
            text: "College of Our Lady of the Elms"
        },
        {
            value: 5920671002,
            text: "College of Saints John Fisher & Thomas More"
        },
        {
            value: 5920672002,
            text: "College of Southern Nevada"
        },
        {
            value: 5920673002,
            text: "College of St. Benedict"
        },
        {
            value: 5920674002,
            text: "College of St. Elizabeth"
        },
        {
            value: 5920675002,
            text: "College of St. Joseph"
        },
        {
            value: 5920676002,
            text: "College of St. Mary"
        },
        {
            value: 5920677002,
            text: "College of St. Rose"
        },
        {
            value: 5920678002,
            text: "College of St. Scholastica"
        },
        {
            value: 5920679002,
            text: "College of the Atlantic"
        },
        {
            value: 5920680002,
            text: "College of the Holy Cross"
        },
        {
            value: 5920681002,
            text: "College of the Ozarks"
        },
        {
            value: 5920682002,
            text: "College of Wooster"
        },
        {
            value: 5920683002,
            text: "Colorado Christian University"
        },
        {
            value: 5920684002,
            text: "Colorado College"
        },
        {
            value: 5920685002,
            text: "Colorado Mesa University"
        },
        {
            value: 5920686002,
            text: "Colorado School of Mines"
        },
        {
            value: 5920687002,
            text: "Colorado State University - Pueblo"
        },
        {
            value: 5920688002,
            text: "Colorado Technical University"
        },
        {
            value: 5920689002,
            text: "Columbia College"
        },
        {
            value: 5920690002,
            text: "Columbia College Chicago"
        },
        {
            value: 5920691002,
            text: "Columbia College of Nursing"
        },
        {
            value: 5920692002,
            text: "Columbia International University"
        },
        {
            value: 5920693002,
            text: "Columbus College of Art and Design"
        },
        {
            value: 5920694002,
            text: "Columbus State University"
        },
        {
            value: 5920695002,
            text: "Conception Seminary College"
        },
        {
            value: 5920696002,
            text: "Concord University"
        },
        {
            value: 5920697002,
            text: "Concordia College"
        },
        {
            value: 5920698002,
            text: "Concordia College - Moorhead"
        },
        {
            value: 5920699002,
            text: "Concordia University"
        },
        {
            value: 5920700002,
            text: "Concordia University Chicago"
        },
        {
            value: 5920701002,
            text: "Concordia University Texas"
        },
        {
            value: 5920702002,
            text: "Concordia University Wisconsin"
        },
        {
            value: 5920703002,
            text: "Concordia University - St. Paul"
        },
        {
            value: 5920704002,
            text: "Connecticut College"
        },
        {
            value: 5920705002,
            text: "Converse College"
        },
        {
            value: 5920706002,
            text: "Cooper Union"
        },
        {
            value: 5920707002,
            text: "Coppin State University"
        },
        {
            value: 5920708002,
            text: "Corban University"
        },
        {
            value: 5920709002,
            text: "Corcoran College of Art and Design"
        },
        {
            value: 5920710002,
            text: "Cornell College"
        },
        {
            value: 5920711002,
            text: "Cornerstone University"
        },
        {
            value: 5920712002,
            text: "Cornish College of the Arts"
        },
        {
            value: 5920713002,
            text: "Covenant College"
        },
        {
            value: 5920714002,
            text: "Cox College"
        },
        {
            value: 5920715002,
            text: "Creighton University"
        },
        {
            value: 5920716002,
            text: "Criswell College"
        },
        {
            value: 5920717002,
            text: "Crown College"
        },
        {
            value: 5920718002,
            text: "Culinary Institute of America"
        },
        {
            value: 5920719002,
            text: "Culver-Stockton College"
        },
        {
            value: 5920720002,
            text: "Cumberland University"
        },
        {
            value: 5920721002,
            text: "Columbia University"
        },
        {
            value: 5920722002,
            text: "Cornell University"
        },
        {
            value: 5920723002,
            text: "Colorado State University"
        },
        {
            value: 5920724002,
            text: "University of Virginia"
        },
        {
            value: 5920725002,
            text: "Colgate University"
        },
        {
            value: 5920726002,
            text: "CUNY - Baruch College"
        },
        {
            value: 5920727002,
            text: "CUNY - Brooklyn College"
        },
        {
            value: 5920728002,
            text: "CUNY - City College"
        },
        {
            value: 5920729002,
            text: "CUNY - College of Staten Island"
        },
        {
            value: 5920730002,
            text: "CUNY - Hunter College"
        },
        {
            value: 5920731002,
            text: "CUNY - John Jay College of Criminal Justice"
        },
        {
            value: 5920732002,
            text: "CUNY - Lehman College"
        },
        {
            value: 5920733002,
            text: "CUNY - Medgar Evers College"
        },
        {
            value: 5920734002,
            text: "CUNY - New York City College of Technology"
        },
        {
            value: 5920735002,
            text: "CUNY - Queens College"
        },
        {
            value: 5920736002,
            text: "CUNY - York College"
        },
        {
            value: 5920737002,
            text: "Curry College"
        },
        {
            value: 5920738002,
            text: "Curtis Institute of Music"
        },
        {
            value: 5920739002,
            text: "D'Youville College"
        },
        {
            value: 5920740002,
            text: "Daemen College"
        },
        {
            value: 5920741002,
            text: "Dakota State University"
        },
        {
            value: 5920742002,
            text: "Dakota Wesleyan University"
        },
        {
            value: 5920743002,
            text: "Dalhousie University"
        },
        {
            value: 5920744002,
            text: "Dallas Baptist University"
        },
        {
            value: 5920745002,
            text: "Dallas Christian College"
        },
        {
            value: 5920746002,
            text: "Dalton State College"
        },
        {
            value: 5920747002,
            text: "Daniel Webster College"
        },
        {
            value: 5920748002,
            text: "Davenport University"
        },
        {
            value: 5920749002,
            text: "Davis and Elkins College"
        },
        {
            value: 5920750002,
            text: "Davis College"
        },
        {
            value: 5920751002,
            text: "Daytona State College"
        },
        {
            value: 5920752002,
            text: "Dean College"
        },
        {
            value: 5920753002,
            text: "Defiance College"
        },
        {
            value: 5920754002,
            text: "Delaware Valley College"
        },
        {
            value: 5920755002,
            text: "Delta State University"
        },
        {
            value: 5920756002,
            text: "Denison University"
        },
        {
            value: 5920757002,
            text: "DePaul University"
        },
        {
            value: 5920758002,
            text: "DePauw University"
        },
        {
            value: 5920759002,
            text: "DEREE - The American College of Greece"
        },
        {
            value: 5920760002,
            text: "DeSales University"
        },
        {
            value: 5920761002,
            text: "DeVry University"
        },
        {
            value: 5920762002,
            text: "Dickinson College"
        },
        {
            value: 5920763002,
            text: "Dickinson State University"
        },
        {
            value: 5920764002,
            text: "Dillard University"
        },
        {
            value: 5920765002,
            text: "Divine Word College"
        },
        {
            value: 5920766002,
            text: "Dixie State College of Utah"
        },
        {
            value: 5920767002,
            text: "Doane College"
        },
        {
            value: 5920768002,
            text: "Dominican College"
        },
        {
            value: 5920769002,
            text: "Dominican University"
        },
        {
            value: 5920770002,
            text: "Dominican University of California"
        },
        {
            value: 5920771002,
            text: "Donnelly College"
        },
        {
            value: 5920772002,
            text: "Dordt College"
        },
        {
            value: 5920773002,
            text: "Dowling College"
        },
        {
            value: 5920774002,
            text: "Drew University"
        },
        {
            value: 5920775002,
            text: "Drexel University"
        },
        {
            value: 5920776002,
            text: "Drury University"
        },
        {
            value: 5920777002,
            text: "Dunwoody College of Technology"
        },
        {
            value: 5920778002,
            text: "Earlham College"
        },
        {
            value: 5920779002,
            text: "Drake University"
        },
        {
            value: 5920780002,
            text: "East Central University"
        },
        {
            value: 5920781002,
            text: "East Stroudsburg University of Pennsylvania"
        },
        {
            value: 5920782002,
            text: "East Tennessee State University"
        },
        {
            value: 5920783002,
            text: "East Texas Baptist University"
        },
        {
            value: 5920784002,
            text: "East-West University"
        },
        {
            value: 5920785002,
            text: "Eastern Connecticut State University"
        },
        {
            value: 5920786002,
            text: "Eastern Mennonite University"
        },
        {
            value: 5920787002,
            text: "Eastern Nazarene College"
        },
        {
            value: 5920788002,
            text: "Eastern New Mexico University"
        },
        {
            value: 5920789002,
            text: "Eastern Oregon University"
        },
        {
            value: 5920790002,
            text: "Eastern University"
        },
        {
            value: 5920791002,
            text: "Eckerd College"
        },
        {
            value: 5920792002,
            text: "ECPI University"
        },
        {
            value: 5920793002,
            text: "Edgewood College"
        },
        {
            value: 5920794002,
            text: "Edinboro University of Pennsylvania"
        },
        {
            value: 5920795002,
            text: "Edison State College"
        },
        {
            value: 5920796002,
            text: "Edward Waters College"
        },
        {
            value: 5920797002,
            text: "Elizabeth City State University"
        },
        {
            value: 5920798002,
            text: "Elizabethtown College"
        },
        {
            value: 5920799002,
            text: "Elmhurst College"
        },
        {
            value: 5920800002,
            text: "Elmira College"
        },
        {
            value: 5920801002,
            text: "Embry-Riddle Aeronautical University"
        },
        {
            value: 5920802002,
            text: "Embry-Riddle Aeronautical University - Prescott"
        },
        {
            value: 5920803002,
            text: "Emerson College"
        },
        {
            value: 5920804002,
            text: "Duquesne University"
        },
        {
            value: 5920805002,
            text: "Eastern Washington University"
        },
        {
            value: 5920806002,
            text: "Eastern Illinois University"
        },
        {
            value: 5920807002,
            text: "Eastern Kentucky University"
        },
        {
            value: 5920808002,
            text: "Eastern Michigan University"
        },
        {
            value: 5920809002,
            text: "Elon University"
        },
        {
            value: 5920810002,
            text: "Delaware State University"
        },
        {
            value: 5920811002,
            text: "Duke University"
        },
        {
            value: 5920812002,
            text: "California Polytechnic State University - San Luis Obispo"
        },
        {
            value: 5920813002,
            text: "Emmanuel College"
        },
        {
            value: 5920814002,
            text: "Emmaus Bible College"
        },
        {
            value: 5920815002,
            text: "Emory and Henry College"
        },
        {
            value: 5920816002,
            text: "Emory University"
        },
        {
            value: 5920817002,
            text: "Emporia State University"
        },
        {
            value: 5920818002,
            text: "Endicott College"
        },
        {
            value: 5920819002,
            text: "Erskine College"
        },
        {
            value: 5920820002,
            text: "Escuela de Artes Plasticas de Puerto Rico"
        },
        {
            value: 5920821002,
            text: "Eureka College"
        },
        {
            value: 5920822002,
            text: "Evangel University"
        },
        {
            value: 5920823002,
            text: "Everest College - Phoenix"
        },
        {
            value: 5920824002,
            text: "Everglades University"
        },
        {
            value: 5920825002,
            text: "Evergreen State College"
        },
        {
            value: 5920826002,
            text: "Excelsior College"
        },
        {
            value: 5920827002,
            text: "Fairfield University"
        },
        {
            value: 5920828002,
            text: "Fairleigh Dickinson University"
        },
        {
            value: 5920829002,
            text: "Fairmont State University"
        },
        {
            value: 5920830002,
            text: "Faith Baptist Bible College and Theological Seminary"
        },
        {
            value: 5920831002,
            text: "Farmingdale State College - SUNY"
        },
        {
            value: 5920832002,
            text: "Fashion Institute of Technology"
        },
        {
            value: 5920833002,
            text: "Faulkner University"
        },
        {
            value: 5920834002,
            text: "Fayetteville State University"
        },
        {
            value: 5920835002,
            text: "Felician College"
        },
        {
            value: 5920836002,
            text: "Ferris State University"
        },
        {
            value: 5920837002,
            text: "Ferrum College"
        },
        {
            value: 5920838002,
            text: "Finlandia University"
        },
        {
            value: 5920839002,
            text: "Fisher College"
        },
        {
            value: 5920840002,
            text: "Fisk University"
        },
        {
            value: 5920841002,
            text: "Fitchburg State University"
        },
        {
            value: 5920842002,
            text: "Five Towns College"
        },
        {
            value: 5920843002,
            text: "Flagler College"
        },
        {
            value: 5920844002,
            text: "Florida Christian College"
        },
        {
            value: 5920845002,
            text: "Florida College"
        },
        {
            value: 5920846002,
            text: "Florida Gulf Coast University"
        },
        {
            value: 5920847002,
            text: "Florida Institute of Technology"
        },
        {
            value: 5920848002,
            text: "Florida Memorial University"
        },
        {
            value: 5920849002,
            text: "Florida Southern College"
        },
        {
            value: 5920850002,
            text: "Florida State College - Jacksonville"
        },
        {
            value: 5920851002,
            text: "Fontbonne University"
        },
        {
            value: 5920852002,
            text: "Fort Hays State University"
        },
        {
            value: 5920853002,
            text: "Fort Lewis College"
        },
        {
            value: 5920854002,
            text: "Fort Valley State University"
        },
        {
            value: 5920855002,
            text: "Framingham State University"
        },
        {
            value: 5920856002,
            text: "Francis Marion University"
        },
        {
            value: 5920857002,
            text: "Franciscan University of Steubenville"
        },
        {
            value: 5920858002,
            text: "Frank Lloyd Wright School of Architecture"
        },
        {
            value: 5920859002,
            text: "Franklin and Marshall College"
        },
        {
            value: 5920860002,
            text: "Franklin College"
        },
        {
            value: 5920861002,
            text: "Franklin College Switzerland"
        },
        {
            value: 5920862002,
            text: "Franklin Pierce University"
        },
        {
            value: 5920863002,
            text: "Franklin University"
        },
        {
            value: 5920864002,
            text: "Franklin W. Olin College of Engineering"
        },
        {
            value: 5920865002,
            text: "Freed-Hardeman University"
        },
        {
            value: 5920866002,
            text: "Fresno Pacific University"
        },
        {
            value: 5920867002,
            text: "Friends University"
        },
        {
            value: 5920868002,
            text: "Frostburg State University"
        },
        {
            value: 5920869002,
            text: "Gallaudet University"
        },
        {
            value: 5920870002,
            text: "Gannon University"
        },
        {
            value: 5920871002,
            text: "Geneva College"
        },
        {
            value: 5920872002,
            text: "George Fox University"
        },
        {
            value: 5920873002,
            text: "George Mason University"
        },
        {
            value: 5920874002,
            text: "George Washington University"
        },
        {
            value: 5920875002,
            text: "Georgetown College"
        },
        {
            value: 5920876002,
            text: "Georgia College & State University"
        },
        {
            value: 5920877002,
            text: "Georgia Gwinnett College"
        },
        {
            value: 5920878002,
            text: "Georgia Regents University"
        },
        {
            value: 5920879002,
            text: "Georgia Southwestern State University"
        },
        {
            value: 5920880002,
            text: "Georgian Court University"
        },
        {
            value: 5920881002,
            text: "Gettysburg College"
        },
        {
            value: 5920882002,
            text: "Glenville State College"
        },
        {
            value: 5920883002,
            text: "God's Bible School and College"
        },
        {
            value: 5920884002,
            text: "Goddard College"
        },
        {
            value: 5920885002,
            text: "Golden Gate University"
        },
        {
            value: 5920886002,
            text: "Goldey-Beacom College"
        },
        {
            value: 5920887002,
            text: "Goldfarb School of Nursing at Barnes-Jewish College"
        },
        {
            value: 5920888002,
            text: "Gonzaga University"
        },
        {
            value: 5920889002,
            text: "Gordon College"
        },
        {
            value: 5920890002,
            text: "Fordham University"
        },
        {
            value: 5920891002,
            text: "Georgia Institute of Technology"
        },
        {
            value: 5920892002,
            text: "Gardner-Webb University"
        },
        {
            value: 5920893002,
            text: "Georgia Southern University"
        },
        {
            value: 5920894002,
            text: "Georgia State University"
        },
        {
            value: 5920895002,
            text: "Florida State University"
        },
        {
            value: 5920896002,
            text: "Dartmouth College"
        },
        {
            value: 5920897002,
            text: "Florida International University"
        },
        {
            value: 5920898002,
            text: "Georgetown University"
        },
        {
            value: 5920899002,
            text: "Furman University"
        },
        {
            value: 5920900002,
            text: "Gordon State College"
        },
        {
            value: 5920901002,
            text: "Goshen College"
        },
        {
            value: 5920902002,
            text: "Goucher College"
        },
        {
            value: 5920903002,
            text: "Governors State University"
        },
        {
            value: 5920904002,
            text: "Grace Bible College"
        },
        {
            value: 5920905002,
            text: "Grace College and Seminary"
        },
        {
            value: 5920906002,
            text: "Grace University"
        },
        {
            value: 5920907002,
            text: "Graceland University"
        },
        {
            value: 5920908002,
            text: "Grand Canyon University"
        },
        {
            value: 5920909002,
            text: "Grand Valley State University"
        },
        {
            value: 5920910002,
            text: "Grand View University"
        },
        {
            value: 5920911002,
            text: "Granite State College"
        },
        {
            value: 5920912002,
            text: "Gratz College"
        },
        {
            value: 5920913002,
            text: "Great Basin College"
        },
        {
            value: 5920914002,
            text: "Great Lakes Christian College"
        },
        {
            value: 5920915002,
            text: "Green Mountain College"
        },
        {
            value: 5920916002,
            text: "Greensboro College"
        },
        {
            value: 5920917002,
            text: "Greenville College"
        },
        {
            value: 5920918002,
            text: "Grinnell College"
        },
        {
            value: 5920919002,
            text: "Grove City College"
        },
        {
            value: 5920920002,
            text: "Guilford College"
        },
        {
            value: 5920921002,
            text: "Gustavus Adolphus College"
        },
        {
            value: 5920922002,
            text: "Gwynedd-Mercy College"
        },
        {
            value: 5920923002,
            text: "Hamilton College"
        },
        {
            value: 5920924002,
            text: "Hamline University"
        },
        {
            value: 5920925002,
            text: "Hampden-Sydney College"
        },
        {
            value: 5920926002,
            text: "Hampshire College"
        },
        {
            value: 5920927002,
            text: "Hannibal-LaGrange University"
        },
        {
            value: 5920928002,
            text: "Hanover College"
        },
        {
            value: 5920929002,
            text: "Hardin-Simmons University"
        },
        {
            value: 5920930002,
            text: "Harding University"
        },
        {
            value: 5920931002,
            text: "Harrington College of Design"
        },
        {
            value: 5920932002,
            text: "Harris-Stowe State University"
        },
        {
            value: 5920933002,
            text: "Harrisburg University of Science and Technology"
        },
        {
            value: 5920934002,
            text: "Hartwick College"
        },
        {
            value: 5920935002,
            text: "Harvey Mudd College"
        },
        {
            value: 5920936002,
            text: "Haskell Indian Nations University"
        },
        {
            value: 5920937002,
            text: "Hastings College"
        },
        {
            value: 5920938002,
            text: "Haverford College"
        },
        {
            value: 5920939002,
            text: "Hawaii Pacific University"
        },
        {
            value: 5920940002,
            text: "Hebrew Theological College"
        },
        {
            value: 5920941002,
            text: "Heidelberg University"
        },
        {
            value: 5920942002,
            text: "Hellenic College"
        },
        {
            value: 5920943002,
            text: "Henderson State University"
        },
        {
            value: 5920944002,
            text: "Hendrix College"
        },
        {
            value: 5920945002,
            text: "Heritage University"
        },
        {
            value: 5920946002,
            text: "Herzing University"
        },
        {
            value: 5920947002,
            text: "Hesser College"
        },
        {
            value: 5920948002,
            text: "High Point University"
        },
        {
            value: 5920949002,
            text: "Hilbert College"
        },
        {
            value: 5920950002,
            text: "Hillsdale College"
        },
        {
            value: 5920951002,
            text: "Hiram College"
        },
        {
            value: 5920952002,
            text: "Hobart and William Smith Colleges"
        },
        {
            value: 5920953002,
            text: "Hodges University"
        },
        {
            value: 5920954002,
            text: "Hofstra University"
        },
        {
            value: 5920955002,
            text: "Hollins University"
        },
        {
            value: 5920956002,
            text: "Holy Apostles College and Seminary"
        },
        {
            value: 5920957002,
            text: "Indiana State University"
        },
        {
            value: 5920958002,
            text: "Holy Family University"
        },
        {
            value: 5920959002,
            text: "Holy Names University"
        },
        {
            value: 5920960002,
            text: "Hood College"
        },
        {
            value: 5920961002,
            text: "Hope College"
        },
        {
            value: 5920962002,
            text: "Hope International University"
        },
        {
            value: 5920963002,
            text: "Houghton College"
        },
        {
            value: 5920964002,
            text: "Howard Payne University"
        },
        {
            value: 5920965002,
            text: "Hult International Business School"
        },
        {
            value: 5920966002,
            text: "Humboldt State University"
        },
        {
            value: 5920967002,
            text: "Humphreys College"
        },
        {
            value: 5920968002,
            text: "Huntingdon College"
        },
        {
            value: 5920969002,
            text: "Huntington University"
        },
        {
            value: 5920970002,
            text: "Husson University"
        },
        {
            value: 5920971002,
            text: "Huston-Tillotson University"
        },
        {
            value: 5920972002,
            text: "Illinois College"
        },
        {
            value: 5920973002,
            text: "Illinois Institute of Art at Chicago"
        },
        {
            value: 5920974002,
            text: "Illinois Institute of Technology"
        },
        {
            value: 5920975002,
            text: "Illinois Wesleyan University"
        },
        {
            value: 5920976002,
            text: "Immaculata University"
        },
        {
            value: 5920977002,
            text: "Indian River State College"
        },
        {
            value: 5920978002,
            text: "Indiana Institute of Technology"
        },
        {
            value: 5920979002,
            text: "Indiana University East"
        },
        {
            value: 5920980002,
            text: "Indiana University Northwest"
        },
        {
            value: 5920981002,
            text: "Indiana University of Pennsylvania"
        },
        {
            value: 5920982002,
            text: "Indiana University Southeast"
        },
        {
            value: 5920983002,
            text: "Illinois State University"
        },
        {
            value: 5920984002,
            text: "Indiana University - Bloomington"
        },
        {
            value: 5920985002,
            text: "Davidson College"
        },
        {
            value: 5920986002,
            text: "Idaho State University"
        },
        {
            value: 5920987002,
            text: "Harvard University"
        },
        {
            value: 5920988002,
            text: "Howard University"
        },
        {
            value: 5920989002,
            text: "Houston Baptist University"
        },
        {
            value: 5920990002,
            text: "Indiana University - Kokomo"
        },
        {
            value: 5920991002,
            text: "Indiana University - South Bend"
        },
        {
            value: 5920992002,
            text: "Indiana University-Purdue University - Fort Wayne"
        },
        {
            value: 5920993002,
            text: "Indiana University-Purdue University - Indianapolis"
        },
        {
            value: 5920994002,
            text: "Indiana Wesleyan University"
        },
        {
            value: 5920995002,
            text: "Institute of American Indian and Alaska Native Culture and Arts Development"
        },
        {
            value: 5920996002,
            text: "Inter American University of Puerto Rico - Aguadilla"
        },
        {
            value: 5920997002,
            text: "Inter American University of Puerto Rico - Arecibo"
        },
        {
            value: 5920998002,
            text: "Inter American University of Puerto Rico - Barranquitas"
        },
        {
            value: 5920999002,
            text: "Inter American University of Puerto Rico - Bayamon"
        },
        {
            value: 5921000002,
            text: "Inter American University of Puerto Rico - Fajardo"
        },
        {
            value: 5921001002,
            text: "Inter American University of Puerto Rico - Guayama"
        },
        {
            value: 5921002002,
            text: "Inter American University of Puerto Rico - Metropolitan Campus"
        },
        {
            value: 5921003002,
            text: "Inter American University of Puerto Rico - Ponce"
        },
        {
            value: 5921004002,
            text: "Inter American University of Puerto Rico - San German"
        },
        {
            value: 5921005002,
            text: "International College of the Cayman Islands"
        },
        {
            value: 5921006002,
            text: "Iona College"
        },
        {
            value: 5921007002,
            text: "Iowa Wesleyan College"
        },
        {
            value: 5921008002,
            text: "Ithaca College"
        },
        {
            value: 5921009002,
            text: "Jarvis Christian College"
        },
        {
            value: 5921010002,
            text: "Jewish Theological Seminary of America"
        },
        {
            value: 5921011002,
            text: "John Brown University"
        },
        {
            value: 5921012002,
            text: "John Carroll University"
        },
        {
            value: 5921013002,
            text: "John F. Kennedy University"
        },
        {
            value: 5921014002,
            text: "Johns Hopkins University"
        },
        {
            value: 5921015002,
            text: "Johnson & Wales University"
        },
        {
            value: 5921016002,
            text: "Johnson C. Smith University"
        },
        {
            value: 5921017002,
            text: "Johnson State College"
        },
        {
            value: 5921018002,
            text: "Johnson University"
        },
        {
            value: 5921019002,
            text: "Jones International University"
        },
        {
            value: 5921020002,
            text: "Judson College"
        },
        {
            value: 5921021002,
            text: "Judson University"
        },
        {
            value: 5921022002,
            text: "Juilliard School"
        },
        {
            value: 5921023002,
            text: "Juniata College"
        },
        {
            value: 5921024002,
            text: "Kalamazoo College"
        },
        {
            value: 5921025002,
            text: "Kansas City Art Institute"
        },
        {
            value: 5921026002,
            text: "Kansas Wesleyan University"
        },
        {
            value: 5921027002,
            text: "Kaplan University"
        },
        {
            value: 5921028002,
            text: "Kean University"
        },
        {
            value: 5921029002,
            text: "Keene State College"
        },
        {
            value: 5921030002,
            text: "Keiser University"
        },
        {
            value: 5921031002,
            text: "Kendall College"
        },
        {
            value: 5921032002,
            text: "Kennesaw State University"
        },
        {
            value: 5921033002,
            text: "Kentucky Christian University"
        },
        {
            value: 5921034002,
            text: "Kentucky State University"
        },
        {
            value: 5921035002,
            text: "Kentucky Wesleyan College"
        },
        {
            value: 5921036002,
            text: "Kenyon College"
        },
        {
            value: 5921037002,
            text: "Kettering College"
        },
        {
            value: 5921038002,
            text: "Kettering University"
        },
        {
            value: 5921039002,
            text: "Keuka College"
        },
        {
            value: 5921040002,
            text: "Keystone College"
        },
        {
            value: 5921041002,
            text: "King University"
        },
        {
            value: 5921042002,
            text: "King's College"
        },
        {
            value: 5921043002,
            text: "Knox College"
        },
        {
            value: 5921044002,
            text: "Kutztown University of Pennsylvania"
        },
        {
            value: 5921045002,
            text: "Kuyper College"
        },
        {
            value: 5921046002,
            text: "La Roche College"
        },
        {
            value: 5921047002,
            text: "La Salle University"
        },
        {
            value: 5921048002,
            text: "La Sierra University"
        },
        {
            value: 5921049002,
            text: "LaGrange College"
        },
        {
            value: 5921050002,
            text: "Laguna College of Art and Design"
        },
        {
            value: 5921051002,
            text: "Lake Erie College"
        },
        {
            value: 5921052002,
            text: "Lake Forest College"
        },
        {
            value: 5921053002,
            text: "Lake Superior State University"
        },
        {
            value: 5921054002,
            text: "Lakeland College"
        },
        {
            value: 5921055002,
            text: "Lakeview College of Nursing"
        },
        {
            value: 5921056002,
            text: "Lancaster Bible College"
        },
        {
            value: 5921057002,
            text: "Lander University"
        },
        {
            value: 5921058002,
            text: "Lane College"
        },
        {
            value: 5921059002,
            text: "Langston University"
        },
        {
            value: 5921060002,
            text: "Lasell College"
        },
        {
            value: 5921061002,
            text: "Lawrence Technological University"
        },
        {
            value: 5921062002,
            text: "Lawrence University"
        },
        {
            value: 5921063002,
            text: "Le Moyne College"
        },
        {
            value: 5921064002,
            text: "Lebanon Valley College"
        },
        {
            value: 5921065002,
            text: "Lee University"
        },
        {
            value: 5921066002,
            text: "Lees-McRae College"
        },
        {
            value: 5921067002,
            text: "Kansas State University"
        },
        {
            value: 5921068002,
            text: "James Madison University"
        },
        {
            value: 5921069002,
            text: "Lafayette College"
        },
        {
            value: 5921070002,
            text: "Jacksonville University"
        },
        {
            value: 5921071002,
            text: "Kent State University"
        },
        {
            value: 5921072002,
            text: "Lamar University"
        },
        {
            value: 5921073002,
            text: "Jackson State University"
        },
        {
            value: 5921074002,
            text: "Lehigh University"
        },
        {
            value: 5921075002,
            text: "Jacksonville State University"
        },
        {
            value: 5921076002,
            text: "LeMoyne-Owen College"
        },
        {
            value: 5921077002,
            text: "Lenoir-Rhyne University"
        },
        {
            value: 5921078002,
            text: "Lesley University"
        },
        {
            value: 5921079002,
            text: "LeTourneau University"
        },
        {
            value: 5921080002,
            text: "Lewis & Clark College"
        },
        {
            value: 5921081002,
            text: "Lewis University"
        },
        {
            value: 5921082002,
            text: "Lewis-Clark State College"
        },
        {
            value: 5921083002,
            text: "Lexington College"
        },
        {
            value: 5921084002,
            text: "Life Pacific College"
        },
        {
            value: 5921085002,
            text: "Life University"
        },
        {
            value: 5921086002,
            text: "LIM College"
        },
        {
            value: 5921087002,
            text: "Limestone College"
        },
        {
            value: 5921088002,
            text: "Lincoln Christian University"
        },
        {
            value: 5921089002,
            text: "Lincoln College"
        },
        {
            value: 5921090002,
            text: "Lincoln Memorial University"
        },
        {
            value: 5921091002,
            text: "Lincoln University"
        },
        {
            value: 5921092002,
            text: "Lindenwood University"
        },
        {
            value: 5921093002,
            text: "Lindsey Wilson College"
        },
        {
            value: 5921094002,
            text: "Linfield College"
        },
        {
            value: 5921095002,
            text: "Lipscomb University"
        },
        {
            value: 5921096002,
            text: "LIU Post"
        },
        {
            value: 5921097002,
            text: "Livingstone College"
        },
        {
            value: 5921098002,
            text: "Lock Haven University of Pennsylvania"
        },
        {
            value: 5921099002,
            text: "Loma Linda University"
        },
        {
            value: 5921100002,
            text: "Longwood University"
        },
        {
            value: 5921101002,
            text: "Loras College"
        },
        {
            value: 5921102002,
            text: "Louisiana College"
        },
        {
            value: 5921103002,
            text: "Louisiana State University Health Sciences Center"
        },
        {
            value: 5921104002,
            text: "Louisiana State University - Alexandria"
        },
        {
            value: 5921105002,
            text: "Louisiana State University - Shreveport"
        },
        {
            value: 5921106002,
            text: "Lourdes University"
        },
        {
            value: 5921107002,
            text: "Loyola Marymount University"
        },
        {
            value: 5921108002,
            text: "Loyola University Chicago"
        },
        {
            value: 5921109002,
            text: "Loyola University Maryland"
        },
        {
            value: 5921110002,
            text: "Loyola University New Orleans"
        },
        {
            value: 5921111002,
            text: "Lubbock Christian University"
        },
        {
            value: 5921112002,
            text: "Luther College"
        },
        {
            value: 5921113002,
            text: "Lycoming College"
        },
        {
            value: 5921114002,
            text: "Lyme Academy College of Fine Arts"
        },
        {
            value: 5921115002,
            text: "Lynchburg College"
        },
        {
            value: 5921116002,
            text: "Lyndon State College"
        },
        {
            value: 5921117002,
            text: "Lynn University"
        },
        {
            value: 5921118002,
            text: "Lyon College"
        },
        {
            value: 5921119002,
            text: "Macalester College"
        },
        {
            value: 5921120002,
            text: "MacMurray College"
        },
        {
            value: 5921121002,
            text: "Madonna University"
        },
        {
            value: 5921122002,
            text: "Maharishi University of Management"
        },
        {
            value: 5921123002,
            text: "Maine College of Art"
        },
        {
            value: 5921124002,
            text: "Maine Maritime Academy"
        },
        {
            value: 5921125002,
            text: "Malone University"
        },
        {
            value: 5921126002,
            text: "Manchester University"
        },
        {
            value: 5921127002,
            text: "Manhattan Christian College"
        },
        {
            value: 5921128002,
            text: "Manhattan College"
        },
        {
            value: 5921129002,
            text: "Manhattan School of Music"
        },
        {
            value: 5921130002,
            text: "Manhattanville College"
        },
        {
            value: 5921131002,
            text: "Mansfield University of Pennsylvania"
        },
        {
            value: 5921132002,
            text: "Maranatha Baptist Bible College"
        },
        {
            value: 5921133002,
            text: "Marian University"
        },
        {
            value: 5921134002,
            text: "Marietta College"
        },
        {
            value: 5921135002,
            text: "Marlboro College"
        },
        {
            value: 5921136002,
            text: "Marquette University"
        },
        {
            value: 5921137002,
            text: "Mars Hill University"
        },
        {
            value: 5921138002,
            text: "Martin Luther College"
        },
        {
            value: 5921139002,
            text: "Martin Methodist College"
        },
        {
            value: 5921140002,
            text: "Martin University"
        },
        {
            value: 5921141002,
            text: "Mary Baldwin College"
        },
        {
            value: 5921142002,
            text: "Marygrove College"
        },
        {
            value: 5921143002,
            text: "Maryland Institute College of Art"
        },
        {
            value: 5921144002,
            text: "Marylhurst University"
        },
        {
            value: 5921145002,
            text: "Marymount Manhattan College"
        },
        {
            value: 5921146002,
            text: "Marymount University"
        },
        {
            value: 5921147002,
            text: "Maryville College"
        },
        {
            value: 5921148002,
            text: "Maryville University of St. Louis"
        },
        {
            value: 5921149002,
            text: "Marywood University"
        },
        {
            value: 5921150002,
            text: "Massachusetts College of Art and Design"
        },
        {
            value: 5921151002,
            text: "Massachusetts College of Liberal Arts"
        },
        {
            value: 5921152002,
            text: "Massachusetts College of Pharmacy and Health Sciences"
        },
        {
            value: 5921153002,
            text: "Massachusetts Institute of Technology"
        },
        {
            value: 5921154002,
            text: "Massachusetts Maritime Academy"
        },
        {
            value: 5921155002,
            text: "Master's College and Seminary"
        },
        {
            value: 5921156002,
            text: "Mayville State University"
        },
        {
            value: 5921157002,
            text: "McDaniel College"
        },
        {
            value: 5921158002,
            text: "McGill University"
        },
        {
            value: 5921159002,
            text: "McKendree University"
        },
        {
            value: 5921160002,
            text: "McMurry University"
        },
        {
            value: 5921161002,
            text: "McPherson College"
        },
        {
            value: 5921162002,
            text: "Medaille College"
        },
        {
            value: 5921163002,
            text: "Marist College"
        },
        {
            value: 5921164002,
            text: "McNeese State University"
        },
        {
            value: 5921165002,
            text: "Louisiana Tech University"
        },
        {
            value: 5921166002,
            text: "Marshall University"
        },
        {
            value: 5921167002,
            text: "Medical University of South Carolina"
        },
        {
            value: 5921168002,
            text: "Memorial University of Newfoundland"
        },
        {
            value: 5921169002,
            text: "Memphis College of Art"
        },
        {
            value: 5921170002,
            text: "Menlo College"
        },
        {
            value: 5921171002,
            text: "Mercy College"
        },
        {
            value: 5921172002,
            text: "Mercy College of Health Sciences"
        },
        {
            value: 5921173002,
            text: "Mercy College of Ohio"
        },
        {
            value: 5921174002,
            text: "Mercyhurst University"
        },
        {
            value: 5921175002,
            text: "Meredith College"
        },
        {
            value: 5921176002,
            text: "Merrimack College"
        },
        {
            value: 5921177002,
            text: "Messiah College"
        },
        {
            value: 5921178002,
            text: "Methodist University"
        },
        {
            value: 5921179002,
            text: "Metropolitan College of New York"
        },
        {
            value: 5921180002,
            text: "Metropolitan State University"
        },
        {
            value: 5921181002,
            text: "Metropolitan State University of Denver"
        },
        {
            value: 5921182002,
            text: "Miami Dade College"
        },
        {
            value: 5921183002,
            text: "Miami International University of Art & Design"
        },
        {
            value: 5921184002,
            text: "Michigan Technological University"
        },
        {
            value: 5921185002,
            text: "Mid-America Christian University"
        },
        {
            value: 5921186002,
            text: "Mid-Atlantic Christian University"
        },
        {
            value: 5921187002,
            text: "Mid-Continent University"
        },
        {
            value: 5921188002,
            text: "MidAmerica Nazarene University"
        },
        {
            value: 5921189002,
            text: "Middle Georgia State College"
        },
        {
            value: 5921190002,
            text: "Middlebury College"
        },
        {
            value: 5921191002,
            text: "Midland College"
        },
        {
            value: 5921192002,
            text: "Midland University"
        },
        {
            value: 5921193002,
            text: "Midstate College"
        },
        {
            value: 5921194002,
            text: "Midway College"
        },
        {
            value: 5921195002,
            text: "Midwestern State University"
        },
        {
            value: 5921196002,
            text: "Miles College"
        },
        {
            value: 5921197002,
            text: "Millersville University of Pennsylvania"
        },
        {
            value: 5921198002,
            text: "Milligan College"
        },
        {
            value: 5921199002,
            text: "Millikin University"
        },
        {
            value: 5921200002,
            text: "Mills College"
        },
        {
            value: 5921201002,
            text: "Millsaps College"
        },
        {
            value: 5921202002,
            text: "Milwaukee Institute of Art and Design"
        },
        {
            value: 5921203002,
            text: "Milwaukee School of Engineering"
        },
        {
            value: 5921204002,
            text: "Minneapolis College of Art and Design"
        },
        {
            value: 5921205002,
            text: "Minnesota State University - Mankato"
        },
        {
            value: 5921206002,
            text: "Minnesota State University - Moorhead"
        },
        {
            value: 5921207002,
            text: "Minot State University"
        },
        {
            value: 5921208002,
            text: "Misericordia University"
        },
        {
            value: 5921209002,
            text: "Mississippi College"
        },
        {
            value: 5921210002,
            text: "Mississippi University for Women"
        },
        {
            value: 5921211002,
            text: "Missouri Baptist University"
        },
        {
            value: 5921212002,
            text: "Missouri Southern State University"
        },
        {
            value: 5921213002,
            text: "Missouri University of Science & Technology"
        },
        {
            value: 5921214002,
            text: "Missouri Valley College"
        },
        {
            value: 5921215002,
            text: "Missouri Western State University"
        },
        {
            value: 5921216002,
            text: "Mitchell College"
        },
        {
            value: 5921217002,
            text: "Molloy College"
        },
        {
            value: 5921218002,
            text: "Monmouth College"
        },
        {
            value: 5921219002,
            text: "Monroe College"
        },
        {
            value: 5921220002,
            text: "Montana State University - Billings"
        },
        {
            value: 5921221002,
            text: "Montana State University - Northern"
        },
        {
            value: 5921222002,
            text: "Montana Tech of the University of Montana"
        },
        {
            value: 5921223002,
            text: "Montclair State University"
        },
        {
            value: 5921224002,
            text: "Monterrey Institute of Technology and Higher Education - Monterrey"
        },
        {
            value: 5921225002,
            text: "Montreat College"
        },
        {
            value: 5921226002,
            text: "Montserrat College of Art"
        },
        {
            value: 5921227002,
            text: "Moody Bible Institute"
        },
        {
            value: 5921228002,
            text: "Moore College of Art & Design"
        },
        {
            value: 5921229002,
            text: "Moravian College"
        },
        {
            value: 5921230002,
            text: "Morehouse College"
        },
        {
            value: 5921231002,
            text: "Morningside College"
        },
        {
            value: 5921232002,
            text: "Morris College"
        },
        {
            value: 5921233002,
            text: "Morrisville State College"
        },
        {
            value: 5921234002,
            text: "Mount Aloysius College"
        },
        {
            value: 5921235002,
            text: "Mount Angel Seminary"
        },
        {
            value: 5921236002,
            text: "Mount Carmel College of Nursing"
        },
        {
            value: 5921237002,
            text: "Mount Holyoke College"
        },
        {
            value: 5921238002,
            text: "Mount Ida College"
        },
        {
            value: 5921239002,
            text: "Mount Marty College"
        },
        {
            value: 5921240002,
            text: "Mount Mary University"
        },
        {
            value: 5921241002,
            text: "Mount Mercy University"
        },
        {
            value: 5921242002,
            text: "Mount Olive College"
        },
        {
            value: 5921243002,
            text: "Mississippi State University"
        },
        {
            value: 5921244002,
            text: "Montana State University"
        },
        {
            value: 5921245002,
            text: "Mississippi Valley State University"
        },
        {
            value: 5921246002,
            text: "Monmouth University"
        },
        {
            value: 5921247002,
            text: "Morehead State University"
        },
        {
            value: 5921248002,
            text: "Miami University - Oxford"
        },
        {
            value: 5921249002,
            text: "Morgan State University"
        },
        {
            value: 5921250002,
            text: "Missouri State University"
        },
        {
            value: 5921251002,
            text: "Michigan State University"
        },
        {
            value: 5921252002,
            text: "Mount St. Mary College"
        },
        {
            value: 5921253002,
            text: "Mount St. Mary's College"
        },
        {
            value: 5921254002,
            text: "Mount St. Mary's University"
        },
        {
            value: 5921255002,
            text: "Mount Vernon Nazarene University"
        },
        {
            value: 5921256002,
            text: "Muhlenberg College"
        },
        {
            value: 5921257002,
            text: "Multnomah University"
        },
        {
            value: 5921258002,
            text: "Muskingum University"
        },
        {
            value: 5921259002,
            text: "Naropa University"
        },
        {
            value: 5921260002,
            text: "National American University"
        },
        {
            value: 5921261002,
            text: "National Graduate School of Quality Management"
        },
        {
            value: 5921262002,
            text: "National Hispanic University"
        },
        {
            value: 5921263002,
            text: "National Labor College"
        },
        {
            value: 5921264002,
            text: "National University"
        },
        {
            value: 5921265002,
            text: "National-Louis University"
        },
        {
            value: 5921266002,
            text: "Nazarene Bible College"
        },
        {
            value: 5921267002,
            text: "Nazareth College"
        },
        {
            value: 5921268002,
            text: "Nebraska Methodist College"
        },
        {
            value: 5921269002,
            text: "Nebraska Wesleyan University"
        },
        {
            value: 5921270002,
            text: "Neumann University"
        },
        {
            value: 5921271002,
            text: "Nevada State College"
        },
        {
            value: 5921272002,
            text: "New College of Florida"
        },
        {
            value: 5921273002,
            text: "New England College"
        },
        {
            value: 5921274002,
            text: "New England Conservatory of Music"
        },
        {
            value: 5921275002,
            text: "New England Institute of Art"
        },
        {
            value: 5921276002,
            text: "New England Institute of Technology"
        },
        {
            value: 5921277002,
            text: "New Jersey City University"
        },
        {
            value: 5921278002,
            text: "New Jersey Institute of Technology"
        },
        {
            value: 5921279002,
            text: "New Mexico Highlands University"
        },
        {
            value: 5921280002,
            text: "New Mexico Institute of Mining and Technology"
        },
        {
            value: 5921281002,
            text: "New Orleans Baptist Theological Seminary"
        },
        {
            value: 5921282002,
            text: "New School"
        },
        {
            value: 5921283002,
            text: "New York Institute of Technology"
        },
        {
            value: 5921284002,
            text: "New York University"
        },
        {
            value: 5921285002,
            text: "Newberry College"
        },
        {
            value: 5921286002,
            text: "Newbury College"
        },
        {
            value: 5921287002,
            text: "Newman University"
        },
        {
            value: 5921288002,
            text: "Niagara University"
        },
        {
            value: 5921289002,
            text: "Nichols College"
        },
        {
            value: 5921290002,
            text: "North Carolina Wesleyan College"
        },
        {
            value: 5921291002,
            text: "North Central College"
        },
        {
            value: 5921292002,
            text: "North Central University"
        },
        {
            value: 5921293002,
            text: "North Greenville University"
        },
        {
            value: 5921294002,
            text: "North Park University"
        },
        {
            value: 5921295002,
            text: "Northcentral University"
        },
        {
            value: 5921296002,
            text: "Northeastern Illinois University"
        },
        {
            value: 5921297002,
            text: "Northeastern State University"
        },
        {
            value: 5921298002,
            text: "Northeastern University"
        },
        {
            value: 5921299002,
            text: "Northern Kentucky University"
        },
        {
            value: 5921300002,
            text: "Northern Michigan University"
        },
        {
            value: 5921301002,
            text: "Northern New Mexico College"
        },
        {
            value: 5921302002,
            text: "Northern State University"
        },
        {
            value: 5921303002,
            text: "Northland College"
        },
        {
            value: 5921304002,
            text: "Northwest Christian University"
        },
        {
            value: 5921305002,
            text: "Northwest Florida State College"
        },
        {
            value: 5921306002,
            text: "Northwest Missouri State University"
        },
        {
            value: 5921307002,
            text: "Northwest Nazarene University"
        },
        {
            value: 5921308002,
            text: "Northwest University"
        },
        {
            value: 5921309002,
            text: "Northwestern College"
        },
        {
            value: 5921310002,
            text: "Northwestern Health Sciences University"
        },
        {
            value: 5921311002,
            text: "Northwestern Oklahoma State University"
        },
        {
            value: 5921312002,
            text: "Northwood University"
        },
        {
            value: 5921313002,
            text: "Norwich University"
        },
        {
            value: 5921314002,
            text: "Notre Dame College of Ohio"
        },
        {
            value: 5921315002,
            text: "Notre Dame de Namur University"
        },
        {
            value: 5921316002,
            text: "Notre Dame of Maryland University"
        },
        {
            value: 5921317002,
            text: "Nova Scotia College of Art and Design"
        },
        {
            value: 5921318002,
            text: "Nova Southeastern University"
        },
        {
            value: 5921319002,
            text: "Nyack College"
        },
        {
            value: 5921320002,
            text: "Oakland City University"
        },
        {
            value: 5921321002,
            text: "Oakland University"
        },
        {
            value: 5921322002,
            text: "Oakwood University"
        },
        {
            value: 5921323002,
            text: "Oberlin College"
        },
        {
            value: 5921324002,
            text: "Occidental College"
        },
        {
            value: 5921325002,
            text: "Oglala Lakota College"
        },
        {
            value: 5921326002,
            text: "North Carolina A&T State University"
        },
        {
            value: 5921327002,
            text: "Northern Illinois University"
        },
        {
            value: 5921328002,
            text: "North Dakota State University"
        },
        {
            value: 5921329002,
            text: "Nicholls State University"
        },
        {
            value: 5921330002,
            text: "North Carolina Central University"
        },
        {
            value: 5921331002,
            text: "Norfolk State University"
        },
        {
            value: 5921332002,
            text: "Northwestern State University of Louisiana"
        },
        {
            value: 5921333002,
            text: "Northern Arizona University"
        },
        {
            value: 5921334002,
            text: "North Carolina State University - Raleigh"
        },
        {
            value: 5921335002,
            text: "Northwestern University"
        },
        {
            value: 5921336002,
            text: "Oglethorpe University"
        },
        {
            value: 5921337002,
            text: "Ohio Christian University"
        },
        {
            value: 5921338002,
            text: "Ohio Dominican University"
        },
        {
            value: 5921339002,
            text: "Ohio Northern University"
        },
        {
            value: 5921340002,
            text: "Ohio Valley University"
        },
        {
            value: 5921341002,
            text: "Ohio Wesleyan University"
        },
        {
            value: 5921342002,
            text: "Oklahoma Baptist University"
        },
        {
            value: 5921343002,
            text: "Oklahoma Christian University"
        },
        {
            value: 5921344002,
            text: "Oklahoma City University"
        },
        {
            value: 5921345002,
            text: "Oklahoma Panhandle State University"
        },
        {
            value: 5921346002,
            text: "Oklahoma State University Institute of Technology - Okmulgee"
        },
        {
            value: 5921347002,
            text: "Oklahoma State University - Oklahoma City"
        },
        {
            value: 5921348002,
            text: "Oklahoma Wesleyan University"
        },
        {
            value: 5921349002,
            text: "Olivet College"
        },
        {
            value: 5921350002,
            text: "Olivet Nazarene University"
        },
        {
            value: 5921351002,
            text: "Olympic College"
        },
        {
            value: 5921352002,
            text: "Oral Roberts University"
        },
        {
            value: 5921353002,
            text: "Oregon College of Art and Craft"
        },
        {
            value: 5921354002,
            text: "Oregon Health and Science University"
        },
        {
            value: 5921355002,
            text: "Oregon Institute of Technology"
        },
        {
            value: 5921356002,
            text: "Otis College of Art and Design"
        },
        {
            value: 5921357002,
            text: "Ottawa University"
        },
        {
            value: 5921358002,
            text: "Otterbein University"
        },
        {
            value: 5921359002,
            text: "Ouachita Baptist University"
        },
        {
            value: 5921360002,
            text: "Our Lady of Holy Cross College"
        },
        {
            value: 5921361002,
            text: "Our Lady of the Lake College"
        },
        {
            value: 5921362002,
            text: "Our Lady of the Lake University"
        },
        {
            value: 5921363002,
            text: "Pace University"
        },
        {
            value: 5921364002,
            text: "Pacific Lutheran University"
        },
        {
            value: 5921365002,
            text: "Pacific Northwest College of Art"
        },
        {
            value: 5921366002,
            text: "Pacific Oaks College"
        },
        {
            value: 5921367002,
            text: "Pacific Union College"
        },
        {
            value: 5921368002,
            text: "Pacific University"
        },
        {
            value: 5921369002,
            text: "Paine College"
        },
        {
            value: 5921370002,
            text: "Palm Beach Atlantic University"
        },
        {
            value: 5921371002,
            text: "Palmer College of Chiropractic"
        },
        {
            value: 5921372002,
            text: "Park University"
        },
        {
            value: 5921373002,
            text: "Parker University"
        },
        {
            value: 5921374002,
            text: "Patten University"
        },
        {
            value: 5921375002,
            text: "Paul Smith's College"
        },
        {
            value: 5921376002,
            text: "Peirce College"
        },
        {
            value: 5921377002,
            text: "Peninsula College"
        },
        {
            value: 5921378002,
            text: "Pennsylvania College of Art and Design"
        },
        {
            value: 5921379002,
            text: "Pennsylvania College of Technology"
        },
        {
            value: 5921380002,
            text: "Pennsylvania State University - Erie, The Behrend College"
        },
        {
            value: 5921381002,
            text: "Pennsylvania State University - Harrisburg"
        },
        {
            value: 5921382002,
            text: "Pepperdine University"
        },
        {
            value: 5921383002,
            text: "Peru State College"
        },
        {
            value: 5921384002,
            text: "Pfeiffer University"
        },
        {
            value: 5921385002,
            text: "Philadelphia University"
        },
        {
            value: 5921386002,
            text: "Philander Smith College"
        },
        {
            value: 5921387002,
            text: "Piedmont College"
        },
        {
            value: 5921388002,
            text: "Pine Manor College"
        },
        {
            value: 5921389002,
            text: "Pittsburg State University"
        },
        {
            value: 5921390002,
            text: "Pitzer College"
        },
        {
            value: 5921391002,
            text: "Plaza College"
        },
        {
            value: 5921392002,
            text: "Plymouth State University"
        },
        {
            value: 5921393002,
            text: "Point Loma Nazarene University"
        },
        {
            value: 5921394002,
            text: "Point Park University"
        },
        {
            value: 5921395002,
            text: "Point University"
        },
        {
            value: 5921396002,
            text: "Polytechnic Institute of New York University"
        },
        {
            value: 5921397002,
            text: "Pomona College"
        },
        {
            value: 5921398002,
            text: "Pontifical Catholic University of Puerto Rico"
        },
        {
            value: 5921399002,
            text: "Pontifical College Josephinum"
        },
        {
            value: 5921400002,
            text: "Post University"
        },
        {
            value: 5921401002,
            text: "Potomac College"
        },
        {
            value: 5921402002,
            text: "Pratt Institute"
        },
        {
            value: 5921403002,
            text: "Prescott College"
        },
        {
            value: 5921404002,
            text: "Presentation College"
        },
        {
            value: 5921405002,
            text: "Principia College"
        },
        {
            value: 5921406002,
            text: "Providence College"
        },
        {
            value: 5921407002,
            text: "Puerto Rico Conservatory of Music"
        },
        {
            value: 5921408002,
            text: "Purchase College - SUNY"
        },
        {
            value: 5921409002,
            text: "Purdue University - Calumet"
        },
        {
            value: 5921410002,
            text: "Purdue University - North Central"
        },
        {
            value: 5921411002,
            text: "Queens University of Charlotte"
        },
        {
            value: 5921412002,
            text: "Oklahoma State University"
        },
        {
            value: 5921413002,
            text: "Oregon State University"
        },
        {
            value: 5921414002,
            text: "Portland State University"
        },
        {
            value: 5921415002,
            text: "Old Dominion University"
        },
        {
            value: 5921416002,
            text: "Prairie View A&M University"
        },
        {
            value: 5921417002,
            text: "Presbyterian College"
        },
        {
            value: 5921418002,
            text: "Purdue University - West Lafayette"
        },
        {
            value: 5921419002,
            text: "Ohio University"
        },
        {
            value: 5921420002,
            text: "Princeton University"
        },
        {
            value: 5921421002,
            text: "Quincy University"
        },
        {
            value: 5921422002,
            text: "Quinnipiac University"
        },
        {
            value: 5921423002,
            text: "Radford University"
        },
        {
            value: 5921424002,
            text: "Ramapo College of New Jersey"
        },
        {
            value: 5921425002,
            text: "Randolph College"
        },
        {
            value: 5921426002,
            text: "Randolph-Macon College"
        },
        {
            value: 5921427002,
            text: "Ranken Technical College"
        },
        {
            value: 5921428002,
            text: "Reed College"
        },
        {
            value: 5921429002,
            text: "Regent University"
        },
        {
            value: 5921430002,
            text: "Regent's American College London"
        },
        {
            value: 5921431002,
            text: "Regis College"
        },
        {
            value: 5921432002,
            text: "Regis University"
        },
        {
            value: 5921433002,
            text: "Reinhardt University"
        },
        {
            value: 5921434002,
            text: "Rensselaer Polytechnic Institute"
        },
        {
            value: 5921435002,
            text: "Research College of Nursing"
        },
        {
            value: 5921436002,
            text: "Resurrection University"
        },
        {
            value: 5921437002,
            text: "Rhode Island College"
        },
        {
            value: 5921438002,
            text: "Rhode Island School of Design"
        },
        {
            value: 5921439002,
            text: "Rhodes College"
        },
        {
            value: 5921440002,
            text: "Richard Stockton College of New Jersey"
        },
        {
            value: 5921441002,
            text: "Richmond - The American International University in London"
        },
        {
            value: 5921442002,
            text: "Rider University"
        },
        {
            value: 5921443002,
            text: "Ringling College of Art and Design"
        },
        {
            value: 5921444002,
            text: "Ripon College"
        },
        {
            value: 5921445002,
            text: "Rivier University"
        },
        {
            value: 5921446002,
            text: "Roanoke College"
        },
        {
            value: 5921447002,
            text: "Robert B. Miller College"
        },
        {
            value: 5921448002,
            text: "Roberts Wesleyan College"
        },
        {
            value: 5921449002,
            text: "Rochester College"
        },
        {
            value: 5921450002,
            text: "Rochester Institute of Technology"
        },
        {
            value: 5921451002,
            text: "Rockford University"
        },
        {
            value: 5921452002,
            text: "Rockhurst University"
        },
        {
            value: 5921453002,
            text: "Rocky Mountain College"
        },
        {
            value: 5921454002,
            text: "Rocky Mountain College of Art and Design"
        },
        {
            value: 5921455002,
            text: "Roger Williams University"
        },
        {
            value: 5921456002,
            text: "Rogers State University"
        },
        {
            value: 5921457002,
            text: "Rollins College"
        },
        {
            value: 5921458002,
            text: "Roosevelt University"
        },
        {
            value: 5921459002,
            text: "Rosalind Franklin University of Medicine and Science"
        },
        {
            value: 5921460002,
            text: "Rose-Hulman Institute of Technology"
        },
        {
            value: 5921461002,
            text: "Rosemont College"
        },
        {
            value: 5921462002,
            text: "Rowan University"
        },
        {
            value: 5921463002,
            text: "Rush University"
        },
        {
            value: 5921464002,
            text: "Rust College"
        },
        {
            value: 5921465002,
            text: "Rutgers, the State University of New Jersey - Camden"
        },
        {
            value: 5921466002,
            text: "Rutgers, the State University of New Jersey - Newark"
        },
        {
            value: 5921467002,
            text: "Ryerson University"
        },
        {
            value: 5921468002,
            text: "Sacred Heart Major Seminary"
        },
        {
            value: 5921469002,
            text: "Saginaw Valley State University"
        },
        {
            value: 5921470002,
            text: "Salem College"
        },
        {
            value: 5921471002,
            text: "Salem International University"
        },
        {
            value: 5921472002,
            text: "Salem State University"
        },
        {
            value: 5921473002,
            text: "Salisbury University"
        },
        {
            value: 5921474002,
            text: "Salish Kootenai College"
        },
        {
            value: 5921475002,
            text: "Salve Regina University"
        },
        {
            value: 5921476002,
            text: "Samuel Merritt University"
        },
        {
            value: 5921477002,
            text: "San Diego Christian College"
        },
        {
            value: 5921478002,
            text: "San Francisco Art Institute"
        },
        {
            value: 5921479002,
            text: "San Francisco Conservatory of Music"
        },
        {
            value: 5921480002,
            text: "San Francisco State University"
        },
        {
            value: 5921481002,
            text: "Sanford College of Nursing"
        },
        {
            value: 5921482002,
            text: "Santa Clara University"
        },
        {
            value: 5921483002,
            text: "Santa Fe University of Art and Design"
        },
        {
            value: 5921484002,
            text: "Sarah Lawrence College"
        },
        {
            value: 5921485002,
            text: "Savannah College of Art and Design"
        },
        {
            value: 5921486002,
            text: "School of the Art Institute of Chicago"
        },
        {
            value: 5921487002,
            text: "School of Visual Arts"
        },
        {
            value: 5921488002,
            text: "Schreiner University"
        },
        {
            value: 5921489002,
            text: "Scripps College"
        },
        {
            value: 5921490002,
            text: "Seattle Pacific University"
        },
        {
            value: 5921491002,
            text: "Seattle University"
        },
        {
            value: 5921492002,
            text: "Seton Hall University"
        },
        {
            value: 5921493002,
            text: "Seton Hill University"
        },
        {
            value: 5921494002,
            text: "Sewanee - University of the South"
        },
        {
            value: 5921495002,
            text: "Shaw University"
        },
        {
            value: 5921496002,
            text: "Shawnee State University"
        },
        {
            value: 5921497002,
            text: "Shenandoah University"
        },
        {
            value: 5921498002,
            text: "Shepherd University"
        },
        {
            value: 5921499002,
            text: "Shimer College"
        },
        {
            value: 5921500002,
            text: "Sacred Heart University"
        },
        {
            value: 5921501002,
            text: "Robert Morris University"
        },
        {
            value: 5921502002,
            text: "Sam Houston State University"
        },
        {
            value: 5921503002,
            text: "Samford University"
        },
        {
            value: 5921504002,
            text: "Savannah State University"
        },
        {
            value: 5921505002,
            text: "San Jose State University"
        },
        {
            value: 5921506002,
            text: "Rutgers, the State University of New Jersey - New Brunswick"
        },
        {
            value: 5921507002,
            text: "San Diego State University"
        },
        {
            value: 5921508002,
            text: "Shippensburg University of Pennsylvania"
        },
        {
            value: 5921509002,
            text: "Shorter University"
        },
        {
            value: 5921510002,
            text: "Siena College"
        },
        {
            value: 5921511002,
            text: "Siena Heights University"
        },
        {
            value: 5921512002,
            text: "Sierra Nevada College"
        },
        {
            value: 5921513002,
            text: "Silver Lake College"
        },
        {
            value: 5921514002,
            text: "Simmons College"
        },
        {
            value: 5921515002,
            text: "Simon Fraser University"
        },
        {
            value: 5921516002,
            text: "Simpson College"
        },
        {
            value: 5921517002,
            text: "Simpson University"
        },
        {
            value: 5921518002,
            text: "Sinte Gleska University"
        },
        {
            value: 5921519002,
            text: "Sitting Bull College"
        },
        {
            value: 5921520002,
            text: "Skidmore College"
        },
        {
            value: 5921521002,
            text: "Slippery Rock University of Pennsylvania"
        },
        {
            value: 5921522002,
            text: "Smith College"
        },
        {
            value: 5921523002,
            text: "Sojourner-Douglass College"
        },
        {
            value: 5921524002,
            text: "Soka University of America"
        },
        {
            value: 5921525002,
            text: "Sonoma State University"
        },
        {
            value: 5921526002,
            text: "South College"
        },
        {
            value: 5921527002,
            text: "South Dakota School of Mines and Technology"
        },
        {
            value: 5921528002,
            text: "South Seattle Community College"
        },
        {
            value: 5921529002,
            text: "South Texas College"
        },
        {
            value: 5921530002,
            text: "South University"
        },
        {
            value: 5921531002,
            text: "Southeastern Oklahoma State University"
        },
        {
            value: 5921532002,
            text: "Southeastern University"
        },
        {
            value: 5921533002,
            text: "Southern Adventist University"
        },
        {
            value: 5921534002,
            text: "Southern Arkansas University"
        },
        {
            value: 5921535002,
            text: "Southern Baptist Theological Seminary"
        },
        {
            value: 5921536002,
            text: "Southern California Institute of Architecture"
        },
        {
            value: 5921537002,
            text: "Southern Connecticut State University"
        },
        {
            value: 5921538002,
            text: "Southern Illinois University - Edwardsville"
        },
        {
            value: 5921539002,
            text: "Southern Nazarene University"
        },
        {
            value: 5921540002,
            text: "Southern New Hampshire University"
        },
        {
            value: 5921541002,
            text: "Southern Oregon University"
        },
        {
            value: 5921542002,
            text: "Southern Polytechnic State University"
        },
        {
            value: 5921543002,
            text: "Southern University - New Orleans"
        },
        {
            value: 5921544002,
            text: "Southern Vermont College"
        },
        {
            value: 5921545002,
            text: "Southern Wesleyan University"
        },
        {
            value: 5921546002,
            text: "Southwest Baptist University"
        },
        {
            value: 5921547002,
            text: "Southwest Minnesota State University"
        },
        {
            value: 5921548002,
            text: "Southwest University of Visual Arts"
        },
        {
            value: 5921549002,
            text: "Southwestern Adventist University"
        },
        {
            value: 5921550002,
            text: "Southwestern Assemblies of God University"
        },
        {
            value: 5921551002,
            text: "Southwestern Christian College"
        },
        {
            value: 5921552002,
            text: "Southwestern Christian University"
        },
        {
            value: 5921553002,
            text: "Southwestern College"
        },
        {
            value: 5921554002,
            text: "Southwestern Oklahoma State University"
        },
        {
            value: 5921555002,
            text: "Southwestern University"
        },
        {
            value: 5921556002,
            text: "Spalding University"
        },
        {
            value: 5921557002,
            text: "Spelman College"
        },
        {
            value: 5921558002,
            text: "Spring Arbor University"
        },
        {
            value: 5921559002,
            text: "Spring Hill College"
        },
        {
            value: 5921560002,
            text: "Springfield College"
        },
        {
            value: 5921561002,
            text: "St. Ambrose University"
        },
        {
            value: 5921562002,
            text: "St. Anselm College"
        },
        {
            value: 5921563002,
            text: "St. Anthony College of Nursing"
        },
        {
            value: 5921564002,
            text: "St. Augustine College"
        },
        {
            value: 5921565002,
            text: "St. Augustine's University"
        },
        {
            value: 5921566002,
            text: "St. Bonaventure University"
        },
        {
            value: 5921567002,
            text: "St. Catharine College"
        },
        {
            value: 5921568002,
            text: "St. Catherine University"
        },
        {
            value: 5921569002,
            text: "St. Charles Borromeo Seminary"
        },
        {
            value: 5921570002,
            text: "St. Cloud State University"
        },
        {
            value: 5921571002,
            text: "St. Edward's University"
        },
        {
            value: 5921572002,
            text: "St. Francis College"
        },
        {
            value: 5921573002,
            text: "St. Francis Medical Center College of Nursing"
        },
        {
            value: 5921574002,
            text: "St. Gregory's University"
        },
        {
            value: 5921575002,
            text: "St. John Fisher College"
        },
        {
            value: 5921576002,
            text: "St. John Vianney College Seminary"
        },
        {
            value: 5921577002,
            text: "St. John's College"
        },
        {
            value: 5921578002,
            text: "St. John's University"
        },
        {
            value: 5921579002,
            text: "St. Joseph Seminary College"
        },
        {
            value: 5921580002,
            text: "St. Joseph's College"
        },
        {
            value: 5921581002,
            text: "St. Joseph's College New York"
        },
        {
            value: 5921582002,
            text: "St. Joseph's University"
        },
        {
            value: 5921583002,
            text: "St. Lawrence University"
        },
        {
            value: 5921584002,
            text: "St. Leo University"
        },
        {
            value: 5921585002,
            text: "Southern University and A&M College"
        },
        {
            value: 5921586002,
            text: "Southern Methodist University"
        },
        {
            value: 5921587002,
            text: "Southeast Missouri State University"
        },
        {
            value: 5921588002,
            text: "Southern Utah University"
        },
        {
            value: 5921589002,
            text: "South Dakota State University"
        },
        {
            value: 5921590002,
            text: "St. Francis University"
        },
        {
            value: 5921591002,
            text: "Southeastern Louisiana University"
        },
        {
            value: 5921592002,
            text: "Southern Illinois University - Carbondale"
        },
        {
            value: 5921593002,
            text: "St. Louis College of Pharmacy"
        },
        {
            value: 5921594002,
            text: "St. Louis University"
        },
        {
            value: 5921595002,
            text: "St. Luke's College of Health Sciences"
        },
        {
            value: 5921596002,
            text: "St. Martin's University"
        },
        {
            value: 5921597002,
            text: "St. Mary's College"
        },
        {
            value: 5921598002,
            text: "St. Mary's College of California"
        },
        {
            value: 5921599002,
            text: "St. Mary's College of Maryland"
        },
        {
            value: 5921600002,
            text: "St. Mary's Seminary and University"
        },
        {
            value: 5921601002,
            text: "St. Mary's University of Minnesota"
        },
        {
            value: 5921602002,
            text: "St. Mary's University of San Antonio"
        },
        {
            value: 5921603002,
            text: "St. Mary-of-the-Woods College"
        },
        {
            value: 5921604002,
            text: "St. Michael's College"
        },
        {
            value: 5921605002,
            text: "St. Norbert College"
        },
        {
            value: 5921606002,
            text: "St. Olaf College"
        },
        {
            value: 5921607002,
            text: "St. Paul's College"
        },
        {
            value: 5921608002,
            text: "St. Peter's University"
        },
        {
            value: 5921609002,
            text: "St. Petersburg College"
        },
        {
            value: 5921610002,
            text: "St. Thomas Aquinas College"
        },
        {
            value: 5921611002,
            text: "St. Thomas University"
        },
        {
            value: 5921612002,
            text: "St. Vincent College"
        },
        {
            value: 5921613002,
            text: "St. Xavier University"
        },
        {
            value: 5921614002,
            text: "Stephens College"
        },
        {
            value: 5921615002,
            text: "Sterling College"
        },
        {
            value: 5921616002,
            text: "Stevens Institute of Technology"
        },
        {
            value: 5921617002,
            text: "Stevenson University"
        },
        {
            value: 5921618002,
            text: "Stillman College"
        },
        {
            value: 5921619002,
            text: "Stonehill College"
        },
        {
            value: 5921620002,
            text: "Strayer University"
        },
        {
            value: 5921621002,
            text: "Suffolk University"
        },
        {
            value: 5921622002,
            text: "Sul Ross State University"
        },
        {
            value: 5921623002,
            text: "Sullivan University"
        },
        {
            value: 5921624002,
            text: "SUNY Buffalo State"
        },
        {
            value: 5921625002,
            text: "SUNY College of Agriculture and Technology - Cobleskill"
        },
        {
            value: 5921626002,
            text: "SUNY College of Environmental Science and Forestry"
        },
        {
            value: 5921627002,
            text: "SUNY College of Technology - Alfred"
        },
        {
            value: 5921628002,
            text: "SUNY College of Technology - Canton"
        },
        {
            value: 5921629002,
            text: "SUNY College of Technology - Delhi"
        },
        {
            value: 5921630002,
            text: "SUNY College - Cortland"
        },
        {
            value: 5921631002,
            text: "SUNY College - Old Westbury"
        },
        {
            value: 5921632002,
            text: "SUNY College - Oneonta"
        },
        {
            value: 5921633002,
            text: "SUNY College - Potsdam"
        },
        {
            value: 5921634002,
            text: "SUNY Downstate Medical Center"
        },
        {
            value: 5921635002,
            text: "SUNY Empire State College"
        },
        {
            value: 5921636002,
            text: "SUNY Institute of Technology - Utica/Rome"
        },
        {
            value: 5921637002,
            text: "SUNY Maritime College"
        },
        {
            value: 5921638002,
            text: "SUNY Upstate Medical University"
        },
        {
            value: 5921639002,
            text: "SUNY - Fredonia"
        },
        {
            value: 5921640002,
            text: "SUNY - Geneseo"
        },
        {
            value: 5921641002,
            text: "SUNY - New Paltz"
        },
        {
            value: 5921642002,
            text: "SUNY - Oswego"
        },
        {
            value: 5921643002,
            text: "SUNY - Plattsburgh"
        },
        {
            value: 5921644002,
            text: "Swarthmore College"
        },
        {
            value: 5921645002,
            text: "Sweet Briar College"
        },
        {
            value: 5921646002,
            text: "Tabor College"
        },
        {
            value: 5921647002,
            text: "Talladega College"
        },
        {
            value: 5921648002,
            text: "Tarleton State University"
        },
        {
            value: 5921649002,
            text: "Taylor University"
        },
        {
            value: 5921650002,
            text: "Tennessee Wesleyan College"
        },
        {
            value: 5921651002,
            text: "Texas A&M International University"
        },
        {
            value: 5921652002,
            text: "Texas A&M University - Commerce"
        },
        {
            value: 5921653002,
            text: "Texas A&M University - Corpus Christi"
        },
        {
            value: 5921654002,
            text: "Texas A&M University - Galveston"
        },
        {
            value: 5921655002,
            text: "Texas A&M University - Kingsville"
        },
        {
            value: 5921656002,
            text: "Texas A&M University - Texarkana"
        },
        {
            value: 5921657002,
            text: "Texas College"
        },
        {
            value: 5921658002,
            text: "Texas Lutheran University"
        },
        {
            value: 5921659002,
            text: "Bucknell University"
        },
        {
            value: 5921660002,
            text: "Butler University"
        },
        {
            value: 5921661002,
            text: "Stephen F. Austin State University"
        },
        {
            value: 5921662002,
            text: "Texas A&M University - College Station"
        },
        {
            value: 5921663002,
            text: "Stanford University"
        },
        {
            value: 5921664002,
            text: "Stetson University"
        },
        {
            value: 5921665002,
            text: "Stony Brook University - SUNY"
        },
        {
            value: 5921666002,
            text: "Syracuse University"
        },
        {
            value: 5921667002,
            text: "Texas Christian University"
        },
        {
            value: 5921668002,
            text: "Temple University"
        },
        {
            value: 5921669002,
            text: "Clemson University"
        },
        {
            value: 5921670002,
            text: "Texas Southern University"
        },
        {
            value: 5921671002,
            text: "Austin Peay State University"
        },
        {
            value: 5921672002,
            text: "Tennessee State University"
        },
        {
            value: 5921673002,
            text: "Ball State University"
        },
        {
            value: 5921674002,
            text: "Texas Tech University Health Sciences Center"
        },
        {
            value: 5921675002,
            text: "Texas Wesleyan University"
        },
        {
            value: 5921676002,
            text: "Texas Woman's University"
        },
        {
            value: 5921677002,
            text: "The Catholic University of America"
        },
        {
            value: 5921678002,
            text: "The Sage Colleges"
        },
        {
            value: 5921679002,
            text: "Thiel College"
        },
        {
            value: 5921680002,
            text: "Thomas Aquinas College"
        },
        {
            value: 5921681002,
            text: "Thomas College"
        },
        {
            value: 5921682002,
            text: "Thomas Edison State College"
        },
        {
            value: 5921683002,
            text: "Thomas Jefferson University"
        },
        {
            value: 5921684002,
            text: "Thomas More College"
        },
        {
            value: 5921685002,
            text: "Thomas More College of Liberal Arts"
        },
        {
            value: 5921686002,
            text: "Thomas University"
        },
        {
            value: 5921687002,
            text: "Tiffin University"
        },
        {
            value: 5921688002,
            text: "Tilburg University"
        },
        {
            value: 5921689002,
            text: "Toccoa Falls College"
        },
        {
            value: 5921690002,
            text: "Tougaloo College"
        },
        {
            value: 5921691002,
            text: "Touro College"
        },
        {
            value: 5921692002,
            text: "Transylvania University"
        },
        {
            value: 5921693002,
            text: "Trent University"
        },
        {
            value: 5921694002,
            text: "Trevecca Nazarene University"
        },
        {
            value: 5921695002,
            text: "Trident University International"
        },
        {
            value: 5921696002,
            text: "Trine University"
        },
        {
            value: 5921697002,
            text: "Trinity Christian College"
        },
        {
            value: 5921698002,
            text: "Trinity College"
        },
        {
            value: 5921699002,
            text: "Trinity College of Nursing & Health Sciences"
        },
        {
            value: 5921700002,
            text: "Trinity International University"
        },
        {
            value: 5921701002,
            text: "Trinity Lutheran College"
        },
        {
            value: 5921702002,
            text: "Trinity University"
        },
        {
            value: 5921703002,
            text: "Trinity Western University"
        },
        {
            value: 5921704002,
            text: "Truett McConnell College"
        },
        {
            value: 5921705002,
            text: "Truman State University"
        },
        {
            value: 5921706002,
            text: "Tufts University"
        },
        {
            value: 5921707002,
            text: "Tusculum College"
        },
        {
            value: 5921708002,
            text: "Tuskegee University"
        },
        {
            value: 5921709002,
            text: "Union College"
        },
        {
            value: 5921710002,
            text: "Union Institute and University"
        },
        {
            value: 5921711002,
            text: "Union University"
        },
        {
            value: 5921712002,
            text: "United States Coast Guard Academy"
        },
        {
            value: 5921713002,
            text: "United States International University - Kenya"
        },
        {
            value: 5921714002,
            text: "United States Merchant Marine Academy"
        },
        {
            value: 5921715002,
            text: "United States Sports Academy"
        },
        {
            value: 5921716002,
            text: "Unity College"
        },
        {
            value: 5921717002,
            text: "Universidad Adventista de las Antillas"
        },
        {
            value: 5921718002,
            text: "Universidad del Este"
        },
        {
            value: 5921719002,
            text: "Universidad del Turabo"
        },
        {
            value: 5921720002,
            text: "Universidad Metropolitana"
        },
        {
            value: 5921721002,
            text: "Universidad Politecnica De Puerto Rico"
        },
        {
            value: 5921722002,
            text: "University of Advancing Technology"
        },
        {
            value: 5921723002,
            text: "University of Alabama - Huntsville"
        },
        {
            value: 5921724002,
            text: "University of Alaska - Anchorage"
        },
        {
            value: 5921725002,
            text: "University of Alaska - Fairbanks"
        },
        {
            value: 5921726002,
            text: "University of Alaska - Southeast"
        },
        {
            value: 5921727002,
            text: "University of Alberta"
        },
        {
            value: 5921728002,
            text: "University of Arkansas for Medical Sciences"
        },
        {
            value: 5921729002,
            text: "University of Arkansas - Fort Smith"
        },
        {
            value: 5921730002,
            text: "University of Arkansas - Little Rock"
        },
        {
            value: 5921731002,
            text: "University of Arkansas - Monticello"
        },
        {
            value: 5921732002,
            text: "University of Baltimore"
        },
        {
            value: 5921733002,
            text: "University of Bridgeport"
        },
        {
            value: 5921734002,
            text: "University of British Columbia"
        },
        {
            value: 5921735002,
            text: "University of Calgary"
        },
        {
            value: 5921736002,
            text: "University of California - Riverside"
        },
        {
            value: 5921737002,
            text: "Holy Cross College"
        },
        {
            value: 5921738002,
            text: "Towson University"
        },
        {
            value: 5921739002,
            text: "United States Military Academy"
        },
        {
            value: 5921740002,
            text: "The Citadel"
        },
        {
            value: 5921741002,
            text: "Troy University"
        },
        {
            value: 5921742002,
            text: "University of California - Davis"
        },
        {
            value: 5921743002,
            text: "Grambling State University"
        },
        {
            value: 5921744002,
            text: "University at Albany - SUNY"
        },
        {
            value: 5921745002,
            text: "University at Buffalo - SUNY"
        },
        {
            value: 5921746002,
            text: "United States Naval Academy"
        },
        {
            value: 5921747002,
            text: "University of Arizona"
        },
        {
            value: 5921748002,
            text: "University of California - Los Angeles"
        },
        {
            value: 5921749002,
            text: "Florida A&M University"
        },
        {
            value: 5921750002,
            text: "Texas State University"
        },
        {
            value: 5921751002,
            text: "University of Alabama - Birmingham"
        },
        {
            value: 5921752002,
            text: "University of California - Santa Cruz"
        },
        {
            value: 5921753002,
            text: "University of Central Missouri"
        },
        {
            value: 5921754002,
            text: "University of Central Oklahoma"
        },
        {
            value: 5921755002,
            text: "University of Charleston"
        },
        {
            value: 5921756002,
            text: "University of Chicago"
        },
        {
            value: 5921757002,
            text: "University of Cincinnati - UC Blue Ash College"
        },
        {
            value: 5921758002,
            text: "University of Colorado - Colorado Springs"
        },
        {
            value: 5921759002,
            text: "University of Colorado - Denver"
        },
        {
            value: 5921760002,
            text: "University of Dallas"
        },
        {
            value: 5921761002,
            text: "University of Denver"
        },
        {
            value: 5921762002,
            text: "University of Detroit Mercy"
        },
        {
            value: 5921763002,
            text: "University of Dubuque"
        },
        {
            value: 5921764002,
            text: "University of Evansville"
        },
        {
            value: 5921765002,
            text: "University of Findlay"
        },
        {
            value: 5921766002,
            text: "University of Great Falls"
        },
        {
            value: 5921767002,
            text: "University of Guam"
        },
        {
            value: 5921768002,
            text: "University of Guelph"
        },
        {
            value: 5921769002,
            text: "University of Hartford"
        },
        {
            value: 5921770002,
            text: "University of Hawaii - Hilo"
        },
        {
            value: 5921771002,
            text: "University of Hawaii - Maui College"
        },
        {
            value: 5921772002,
            text: "University of Hawaii - West Oahu"
        },
        {
            value: 5921773002,
            text: "University of Houston - Clear Lake"
        },
        {
            value: 5921774002,
            text: "University of Houston - Downtown"
        },
        {
            value: 5921775002,
            text: "University of Houston - Victoria"
        },
        {
            value: 5921776002,
            text: "University of Illinois - Chicago"
        },
        {
            value: 5921777002,
            text: "University of Illinois - Springfield"
        },
        {
            value: 5921778002,
            text: "University of Indianapolis"
        },
        {
            value: 5921779002,
            text: "University of Jamestown"
        },
        {
            value: 5921780002,
            text: "University of La Verne"
        },
        {
            value: 5921781002,
            text: "University of Maine - Augusta"
        },
        {
            value: 5921782002,
            text: "University of Maine - Farmington"
        },
        {
            value: 5921783002,
            text: "University of Maine - Fort Kent"
        },
        {
            value: 5921784002,
            text: "University of Maine - Machias"
        },
        {
            value: 5921785002,
            text: "University of Maine - Presque Isle"
        },
        {
            value: 5921786002,
            text: "University of Mary"
        },
        {
            value: 5921787002,
            text: "University of Mary Hardin-Baylor"
        },
        {
            value: 5921788002,
            text: "University of Mary Washington"
        },
        {
            value: 5921789002,
            text: "University of Maryland - Baltimore"
        },
        {
            value: 5921790002,
            text: "University of Maryland - Baltimore County"
        },
        {
            value: 5921791002,
            text: "University of Maryland - Eastern Shore"
        },
        {
            value: 5921792002,
            text: "University of Maryland - University College"
        },
        {
            value: 5921793002,
            text: "University of Massachusetts - Boston"
        },
        {
            value: 5921794002,
            text: "University of Massachusetts - Dartmouth"
        },
        {
            value: 5921795002,
            text: "University of Massachusetts - Lowell"
        },
        {
            value: 5921796002,
            text: "University of Medicine and Dentistry of New Jersey"
        },
        {
            value: 5921797002,
            text: "University of Michigan - Dearborn"
        },
        {
            value: 5921798002,
            text: "University of Michigan - Flint"
        },
        {
            value: 5921799002,
            text: "University of Minnesota - Crookston"
        },
        {
            value: 5921800002,
            text: "University of Minnesota - Duluth"
        },
        {
            value: 5921801002,
            text: "University of Minnesota - Morris"
        },
        {
            value: 5921802002,
            text: "University of Mississippi Medical Center"
        },
        {
            value: 5921803002,
            text: "University of Missouri - Kansas City"
        },
        {
            value: 5921804002,
            text: "University of Missouri - St. Louis"
        },
        {
            value: 5921805002,
            text: "University of Mobile"
        },
        {
            value: 5921806002,
            text: "University of Montana - Western"
        },
        {
            value: 5921807002,
            text: "University of Montevallo"
        },
        {
            value: 5921808002,
            text: "University of Mount Union"
        },
        {
            value: 5921809002,
            text: "University of Nebraska Medical Center"
        },
        {
            value: 5921810002,
            text: "University of Nebraska - Kearney"
        },
        {
            value: 5921811002,
            text: "University of Dayton"
        },
        {
            value: 5921812002,
            text: "University of Delaware"
        },
        {
            value: 5921813002,
            text: "University of Florida"
        },
        {
            value: 5921814002,
            text: "University of Iowa"
        },
        {
            value: 5921815002,
            text: "University of Idaho"
        },
        {
            value: 5921816002,
            text: "University of Kentucky"
        },
        {
            value: 5921817002,
            text: "University of Massachusetts - Amherst"
        },
        {
            value: 5921818002,
            text: "University of Maine"
        },
        {
            value: 5921819002,
            text: "University of Michigan - Ann Arbor"
        },
        {
            value: 5921820002,
            text: "University of Cincinnati"
        },
        {
            value: 5921821002,
            text: "University of Miami"
        },
        {
            value: 5921822002,
            text: "University of Louisiana - Monroe"
        },
        {
            value: 5921823002,
            text: "University of Missouri"
        },
        {
            value: 5921824002,
            text: "University of Mississippi"
        },
        {
            value: 5921825002,
            text: "University of Memphis"
        },
        {
            value: 5921826002,
            text: "University of Houston"
        },
        {
            value: 5921827002,
            text: "University of Colorado - Boulder"
        },
        {
            value: 5921828002,
            text: "University of Nebraska - Omaha"
        },
        {
            value: 5921829002,
            text: "University of New Brunswick"
        },
        {
            value: 5921830002,
            text: "University of New England"
        },
        {
            value: 5921831002,
            text: "University of New Haven"
        },
        {
            value: 5921832002,
            text: "University of New Orleans"
        },
        {
            value: 5921833002,
            text: "University of North Alabama"
        },
        {
            value: 5921834002,
            text: "University of North Carolina School of the Arts"
        },
        {
            value: 5921835002,
            text: "University of North Carolina - Asheville"
        },
        {
            value: 5921836002,
            text: "University of North Carolina - Greensboro"
        },
        {
            value: 5921837002,
            text: "University of North Carolina - Pembroke"
        },
        {
            value: 5921838002,
            text: "University of North Carolina - Wilmington"
        },
        {
            value: 5921839002,
            text: "University of North Florida"
        },
        {
            value: 5921840002,
            text: "University of North Georgia"
        },
        {
            value: 5921841002,
            text: "University of Northwestern Ohio"
        },
        {
            value: 5921842002,
            text: "University of Northwestern - St. Paul"
        },
        {
            value: 5921843002,
            text: "University of Ottawa"
        },
        {
            value: 5921844002,
            text: "University of Phoenix"
        },
        {
            value: 5921845002,
            text: "University of Pikeville"
        },
        {
            value: 5921846002,
            text: "University of Portland"
        },
        {
            value: 5921847002,
            text: "University of Prince Edward Island"
        },
        {
            value: 5921848002,
            text: "University of Puerto Rico - Aguadilla"
        },
        {
            value: 5921849002,
            text: "University of Puerto Rico - Arecibo"
        },
        {
            value: 5921850002,
            text: "University of Puerto Rico - Bayamon"
        },
        {
            value: 5921851002,
            text: "University of Puerto Rico - Cayey"
        },
        {
            value: 5921852002,
            text: "University of Puerto Rico - Humacao"
        },
        {
            value: 5921853002,
            text: "University of Puerto Rico - Mayaguez"
        },
        {
            value: 5921854002,
            text: "University of Puerto Rico - Medical Sciences Campus"
        },
        {
            value: 5921855002,
            text: "University of Puerto Rico - Ponce"
        },
        {
            value: 5921856002,
            text: "University of Puerto Rico - Rio Piedras"
        },
        {
            value: 5921857002,
            text: "University of Puget Sound"
        },
        {
            value: 5921858002,
            text: "University of Redlands"
        },
        {
            value: 5921859002,
            text: "University of Regina"
        },
        {
            value: 5921860002,
            text: "University of Rio Grande"
        },
        {
            value: 5921861002,
            text: "University of Rochester"
        },
        {
            value: 5921862002,
            text: "University of San Francisco"
        },
        {
            value: 5921863002,
            text: "University of Saskatchewan"
        },
        {
            value: 5921864002,
            text: "University of Science and Arts of Oklahoma"
        },
        {
            value: 5921865002,
            text: "University of Scranton"
        },
        {
            value: 5921866002,
            text: "University of Sioux Falls"
        },
        {
            value: 5921867002,
            text: "University of South Carolina - Aiken"
        },
        {
            value: 5921868002,
            text: "University of South Carolina - Beaufort"
        },
        {
            value: 5921869002,
            text: "University of South Carolina - Upstate"
        },
        {
            value: 5921870002,
            text: "University of South Florida - St. Petersburg"
        },
        {
            value: 5921871002,
            text: "University of Southern Indiana"
        },
        {
            value: 5921872002,
            text: "University of Southern Maine"
        },
        {
            value: 5921873002,
            text: "University of St. Francis"
        },
        {
            value: 5921874002,
            text: "University of St. Joseph"
        },
        {
            value: 5921875002,
            text: "University of St. Mary"
        },
        {
            value: 5921876002,
            text: "University of St. Thomas"
        },
        {
            value: 5921877002,
            text: "University of Tampa"
        },
        {
            value: 5921878002,
            text: "University of Texas Health Science Center - Houston"
        },
        {
            value: 5921879002,
            text: "University of Texas Health Science Center - San Antonio"
        },
        {
            value: 5921880002,
            text: "University of Texas Medical Branch - Galveston"
        },
        {
            value: 5921881002,
            text: "University of Texas of the Permian Basin"
        },
        {
            value: 5921882002,
            text: "University of Texas - Arlington"
        },
        {
            value: 5921883002,
            text: "University of Texas - Brownsville"
        },
        {
            value: 5921884002,
            text: "University of Texas - Pan American"
        },
        {
            value: 5921885002,
            text: "University of Oregon"
        },
        {
            value: 5921886002,
            text: "University of New Mexico"
        },
        {
            value: 5921887002,
            text: "University of Pennsylvania"
        },
        {
            value: 5921888002,
            text: "University of North Dakota"
        },
        {
            value: 5921889002,
            text: "University of Nevada - Reno"
        },
        {
            value: 5921890002,
            text: "University of New Hampshire"
        },
        {
            value: 5921891002,
            text: "University of Texas - Austin"
        },
        {
            value: 5921892002,
            text: "University of Southern Mississippi"
        },
        {
            value: 5921893002,
            text: "University of Rhode Island"
        },
        {
            value: 5921894002,
            text: "University of South Dakota"
        },
        {
            value: 5921895002,
            text: "University of Tennessee"
        },
        {
            value: 5921896002,
            text: "University of North Texas"
        },
        {
            value: 5921897002,
            text: "University of North Carolina - Charlotte"
        },
        {
            value: 5921898002,
            text: "University of Texas - San Antonio"
        },
        {
            value: 5921899002,
            text: "University of Notre Dame"
        },
        {
            value: 5921900002,
            text: "University of Southern California"
        },
        {
            value: 5921901002,
            text: "University of Texas - Tyler"
        },
        {
            value: 5921902002,
            text: "University of the Arts"
        },
        {
            value: 5921903002,
            text: "University of the Cumberlands"
        },
        {
            value: 5921904002,
            text: "University of the District of Columbia"
        },
        {
            value: 5921905002,
            text: "University of the Ozarks"
        },
        {
            value: 5921906002,
            text: "University of the Pacific"
        },
        {
            value: 5921907002,
            text: "University of the Sacred Heart"
        },
        {
            value: 5921908002,
            text: "University of the Sciences"
        },
        {
            value: 5921909002,
            text: "University of the Southwest"
        },
        {
            value: 5921910002,
            text: "University of the Virgin Islands"
        },
        {
            value: 5921911002,
            text: "University of the West"
        },
        {
            value: 5921912002,
            text: "University of Toronto"
        },
        {
            value: 5921913002,
            text: "University of Vermont"
        },
        {
            value: 5921914002,
            text: "University of Victoria"
        },
        {
            value: 5921915002,
            text: "University of Virginia - Wise"
        },
        {
            value: 5921916002,
            text: "University of Waterloo"
        },
        {
            value: 5921917002,
            text: "University of West Alabama"
        },
        {
            value: 5921918002,
            text: "University of West Florida"
        },
        {
            value: 5921919002,
            text: "University of West Georgia"
        },
        {
            value: 5921920002,
            text: "University of Windsor"
        },
        {
            value: 5921921002,
            text: "University of Winnipeg"
        },
        {
            value: 5921922002,
            text: "University of Wisconsin - Eau Claire"
        },
        {
            value: 5921923002,
            text: "University of Wisconsin - Green Bay"
        },
        {
            value: 5921924002,
            text: "University of Wisconsin - La Crosse"
        },
        {
            value: 5921925002,
            text: "University of Wisconsin - Milwaukee"
        },
        {
            value: 5921926002,
            text: "University of Wisconsin - Oshkosh"
        },
        {
            value: 5921927002,
            text: "University of Wisconsin - Parkside"
        },
        {
            value: 5921928002,
            text: "University of Wisconsin - Platteville"
        },
        {
            value: 5921929002,
            text: "University of Wisconsin - River Falls"
        },
        {
            value: 5921930002,
            text: "University of Wisconsin - Stevens Point"
        },
        {
            value: 5921931002,
            text: "University of Wisconsin - Stout"
        },
        {
            value: 5921932002,
            text: "University of Wisconsin - Superior"
        },
        {
            value: 5921933002,
            text: "University of Wisconsin - Whitewater"
        },
        {
            value: 5921934002,
            text: "Upper Iowa University"
        },
        {
            value: 5921935002,
            text: "Urbana University"
        },
        {
            value: 5921936002,
            text: "Ursinus College"
        },
        {
            value: 5921937002,
            text: "Ursuline College"
        },
        {
            value: 5921938002,
            text: "Utah Valley University"
        },
        {
            value: 5921939002,
            text: "Utica College"
        },
        {
            value: 5921940002,
            text: "Valdosta State University"
        },
        {
            value: 5921941002,
            text: "Valley City State University"
        },
        {
            value: 5921942002,
            text: "Valley Forge Christian College"
        },
        {
            value: 5921943002,
            text: "VanderCook College of Music"
        },
        {
            value: 5921944002,
            text: "Vanguard University of Southern California"
        },
        {
            value: 5921945002,
            text: "Vassar College"
        },
        {
            value: 5921946002,
            text: "Vaughn College of Aeronautics and Technology"
        },
        {
            value: 5921947002,
            text: "Vermont Technical College"
        },
        {
            value: 5921948002,
            text: "Victory University"
        },
        {
            value: 5921949002,
            text: "Vincennes University"
        },
        {
            value: 5921950002,
            text: "Virginia Commonwealth University"
        },
        {
            value: 5921951002,
            text: "Virginia Intermont College"
        },
        {
            value: 5921952002,
            text: "Virginia State University"
        },
        {
            value: 5921953002,
            text: "Virginia Union University"
        },
        {
            value: 5921954002,
            text: "Virginia Wesleyan College"
        },
        {
            value: 5921955002,
            text: "Viterbo University"
        },
        {
            value: 5921956002,
            text: "Voorhees College"
        },
        {
            value: 5921957002,
            text: "Wabash College"
        },
        {
            value: 5921958002,
            text: "Walden University"
        },
        {
            value: 5921959002,
            text: "Waldorf College"
        },
        {
            value: 5921960002,
            text: "Walla Walla University"
        },
        {
            value: 5921961002,
            text: "Walsh College of Accountancy and Business Administration"
        },
        {
            value: 5921962002,
            text: "Walsh University"
        },
        {
            value: 5921963002,
            text: "Warner Pacific College"
        },
        {
            value: 5921964002,
            text: "Warner University"
        },
        {
            value: 5921965002,
            text: "Warren Wilson College"
        },
        {
            value: 5921966002,
            text: "Wartburg College"
        },
        {
            value: 5921967002,
            text: "Washburn University"
        },
        {
            value: 5921968002,
            text: "Washington Adventist University"
        },
        {
            value: 5921969002,
            text: "Washington and Jefferson College"
        },
        {
            value: 5921970002,
            text: "Washington and Lee University"
        },
        {
            value: 5921971002,
            text: "Washington College"
        },
        {
            value: 5921972002,
            text: "Washington University in St. Louis"
        },
        {
            value: 5921973002,
            text: "Watkins College of Art, Design & Film"
        },
        {
            value: 5921974002,
            text: "Wayland Baptist University"
        },
        {
            value: 5921975002,
            text: "Wayne State College"
        },
        {
            value: 5921976002,
            text: "Wayne State University"
        },
        {
            value: 5921977002,
            text: "Waynesburg University"
        },
        {
            value: 5921978002,
            text: "Valparaiso University"
        },
        {
            value: 5921979002,
            text: "Villanova University"
        },
        {
            value: 5921980002,
            text: "Virginia Tech"
        },
        {
            value: 5921981002,
            text: "Washington State University"
        },
        {
            value: 5921982002,
            text: "University of Toledo"
        },
        {
            value: 5921983002,
            text: "Wagner College"
        },
        {
            value: 5921984002,
            text: "University of Wyoming"
        },
        {
            value: 5921985002,
            text: "University of Wisconsin - Madison"
        },
        {
            value: 5921986002,
            text: "University of Tulsa"
        },
        {
            value: 5921987002,
            text: "Webb Institute"
        },
        {
            value: 5921988002,
            text: "Webber International University"
        },
        {
            value: 5921989002,
            text: "Webster University"
        },
        {
            value: 5921990002,
            text: "Welch College"
        },
        {
            value: 5921991002,
            text: "Wellesley College"
        },
        {
            value: 5921992002,
            text: "Wells College"
        },
        {
            value: 5921993002,
            text: "Wentworth Institute of Technology"
        },
        {
            value: 5921994002,
            text: "Wesley College"
        },
        {
            value: 5921995002,
            text: "Wesleyan College"
        },
        {
            value: 5921996002,
            text: "Wesleyan University"
        },
        {
            value: 5921997002,
            text: "West Chester University of Pennsylvania"
        },
        {
            value: 5921998002,
            text: "West Liberty University"
        },
        {
            value: 5921999002,
            text: "West Texas A&M University"
        },
        {
            value: 5922000002,
            text: "West Virginia State University"
        },
        {
            value: 5922001002,
            text: "West Virginia University Institute of Technology"
        },
        {
            value: 5922002002,
            text: "West Virginia University - Parkersburg"
        },
        {
            value: 5922003002,
            text: "West Virginia Wesleyan College"
        },
        {
            value: 5922004002,
            text: "Western Connecticut State University"
        },
        {
            value: 5922005002,
            text: "Western Governors University"
        },
        {
            value: 5922006002,
            text: "Western International University"
        },
        {
            value: 5922007002,
            text: "Western Nevada College"
        },
        {
            value: 5922008002,
            text: "Western New England University"
        },
        {
            value: 5922009002,
            text: "Western New Mexico University"
        },
        {
            value: 5922010002,
            text: "Western Oregon University"
        },
        {
            value: 5922011002,
            text: "Western State Colorado University"
        },
        {
            value: 5922012002,
            text: "Western University"
        },
        {
            value: 5922013002,
            text: "Western Washington University"
        },
        {
            value: 5922014002,
            text: "Westfield State University"
        },
        {
            value: 5922015002,
            text: "Westminster College"
        },
        {
            value: 5922016002,
            text: "Westmont College"
        },
        {
            value: 5922017002,
            text: "Wheaton College"
        },
        {
            value: 5922018002,
            text: "Wheeling Jesuit University"
        },
        {
            value: 5922019002,
            text: "Wheelock College"
        },
        {
            value: 5922020002,
            text: "Whitman College"
        },
        {
            value: 5922021002,
            text: "Whittier College"
        },
        {
            value: 5922022002,
            text: "Whitworth University"
        },
        {
            value: 5922023002,
            text: "Wichita State University"
        },
        {
            value: 5922024002,
            text: "Widener University"
        },
        {
            value: 5922025002,
            text: "Wilberforce University"
        },
        {
            value: 5922026002,
            text: "Wiley College"
        },
        {
            value: 5922027002,
            text: "Wilkes University"
        },
        {
            value: 5922028002,
            text: "Willamette University"
        },
        {
            value: 5922029002,
            text: "William Carey University"
        },
        {
            value: 5922030002,
            text: "William Jessup University"
        },
        {
            value: 5922031002,
            text: "William Jewell College"
        },
        {
            value: 5922032002,
            text: "William Paterson University of New Jersey"
        },
        {
            value: 5922033002,
            text: "William Peace University"
        },
        {
            value: 5922034002,
            text: "William Penn University"
        },
        {
            value: 5922035002,
            text: "William Woods University"
        },
        {
            value: 5922036002,
            text: "Williams Baptist College"
        },
        {
            value: 5922037002,
            text: "Williams College"
        },
        {
            value: 5922038002,
            text: "Wilmington College"
        },
        {
            value: 5922039002,
            text: "Wilmington University"
        },
        {
            value: 5922040002,
            text: "Wilson College"
        },
        {
            value: 5922041002,
            text: "Wingate University"
        },
        {
            value: 5922042002,
            text: "Winona State University"
        },
        {
            value: 5922043002,
            text: "Winston-Salem State University"
        },
        {
            value: 5922044002,
            text: "Winthrop University"
        },
        {
            value: 5922045002,
            text: "Wisconsin Lutheran College"
        },
        {
            value: 5922046002,
            text: "Wittenberg University"
        },
        {
            value: 5922047002,
            text: "Woodbury University"
        },
        {
            value: 5922048002,
            text: "Worcester Polytechnic Institute"
        },
        {
            value: 5922049002,
            text: "Worcester State University"
        },
        {
            value: 5922050002,
            text: "Wright State University"
        },
        {
            value: 5922051002,
            text: "Xavier University"
        },
        {
            value: 5922052002,
            text: "Xavier University of Louisiana"
        },
        {
            value: 5922053002,
            text: "Yeshiva University"
        },
        {
            value: 5922054002,
            text: "York College"
        },
        {
            value: 5922055002,
            text: "York College of Pennsylvania"
        },
        {
            value: 5922056002,
            text: "York University"
        },
        {
            value: 5922057002,
            text: "University of Cambridge"
        },
        {
            value: 5922058002,
            text: "UCL (University College London)"
        },
        {
            value: 5922059002,
            text: "Imperial College London"
        },
        {
            value: 5922060002,
            text: "University of Oxford"
        },
        {
            value: 5922061002,
            text: "ETH Zurich (Swiss Federal Institute of Technology)"
        },
        {
            value: 5922062002,
            text: "University of Edinburgh"
        },
        {
            value: 5922063002,
            text: "Ecole Polytechnique Fédérale de Lausanne"
        },
        {
            value: 5922064002,
            text: "King's College London (KCL)"
        },
        {
            value: 5922065002,
            text: "National University of Singapore (NUS)"
        },
        {
            value: 5922066002,
            text: "University of Hong Kong"
        },
        {
            value: 5922067002,
            text: "Australian National University"
        },
        {
            value: 5922068002,
            text: "Ecole normale supérieure, Paris"
        },
        {
            value: 5922069002,
            text: "University of Bristol"
        },
        {
            value: 5922070002,
            text: "The University of Melbourne"
        },
        {
            value: 5922071002,
            text: "The University of Tokyo"
        },
        {
            value: 5922072002,
            text: "The University of Manchester"
        },
        {
            value: 5922073002,
            text: "Western Illinois University"
        },
        {
            value: 5922074002,
            text: "Wofford College"
        },
        {
            value: 5922075002,
            text: "Western Carolina University"
        },
        {
            value: 5922076002,
            text: "West Virginia University"
        },
        {
            value: 5922077002,
            text: "Yale University"
        },
        {
            value: 5922078002,
            text: "The Hong Kong University of Science and Technology"
        },
        {
            value: 5922079002,
            text: "Kyoto University"
        },
        {
            value: 5922080002,
            text: "Seoul National University"
        },
        {
            value: 5922081002,
            text: "The University of Sydney"
        },
        {
            value: 5922082002,
            text: "The Chinese University of Hong Kong"
        },
        {
            value: 5922083002,
            text: "Ecole Polytechnique"
        },
        {
            value: 5922084002,
            text: "Nanyang Technological University (NTU)"
        },
        {
            value: 5922085002,
            text: "The University of Queensland"
        },
        {
            value: 5922086002,
            text: "University of Copenhagen"
        },
        {
            value: 5922087002,
            text: "Peking University"
        },
        {
            value: 5922088002,
            text: "Tsinghua University"
        },
        {
            value: 5922089002,
            text: "Ruprecht-Karls-Universität Heidelberg"
        },
        {
            value: 5922090002,
            text: "University of Glasgow"
        },
        {
            value: 5922091002,
            text: "The University of New South Wales"
        },
        {
            value: 5922092002,
            text: "Technische Universität München"
        },
        {
            value: 5922093002,
            text: "Osaka University"
        },
        {
            value: 5922094002,
            text: "University of Amsterdam"
        },
        {
            value: 5922095002,
            text: "KAIST - Korea Advanced Institute of Science & Technology"
        },
        {
            value: 5922096002,
            text: "Trinity College Dublin"
        },
        {
            value: 5922097002,
            text: "University of Birmingham"
        },
        {
            value: 5922098002,
            text: "The University of Warwick"
        },
        {
            value: 5922099002,
            text: "Ludwig-Maximilians-Universität München"
        },
        {
            value: 5922100002,
            text: "Tokyo Institute of Technology"
        },
        {
            value: 5922101002,
            text: "Lund University"
        },
        {
            value: 5922102002,
            text: "London School of Economics and Political Science (LSE)"
        },
        {
            value: 5922103002,
            text: "Monash University"
        },
        {
            value: 5922104002,
            text: "University of Helsinki"
        },
        {
            value: 5922105002,
            text: "The University of Sheffield"
        },
        {
            value: 5922106002,
            text: "University of Geneva"
        },
        {
            value: 5922107002,
            text: "Leiden University"
        },
        {
            value: 5922108002,
            text: "The University of Nottingham"
        },
        {
            value: 5922109002,
            text: "Tohoku University"
        },
        {
            value: 5922110002,
            text: "KU Leuven"
        },
        {
            value: 5922111002,
            text: "University of Zurich"
        },
        {
            value: 5922112002,
            text: "Uppsala University"
        },
        {
            value: 5922113002,
            text: "Utrecht University"
        },
        {
            value: 5922114002,
            text: "National Taiwan University (NTU)"
        },
        {
            value: 5922115002,
            text: "University of St Andrews"
        },
        {
            value: 5922116002,
            text: "The University of Western Australia"
        },
        {
            value: 5922117002,
            text: "University of Southampton"
        },
        {
            value: 5922118002,
            text: "Fudan University"
        },
        {
            value: 5922119002,
            text: "University of Oslo"
        },
        {
            value: 5922120002,
            text: "Durham University"
        },
        {
            value: 5922121002,
            text: "Aarhus University"
        },
        {
            value: 5922122002,
            text: "Erasmus University Rotterdam"
        },
        {
            value: 5922123002,
            text: "Université de Montréal"
        },
        {
            value: 5922124002,
            text: "The University of Auckland"
        },
        {
            value: 5922125002,
            text: "Delft University of Technology"
        },
        {
            value: 5922126002,
            text: "University of Groningen"
        },
        {
            value: 5922127002,
            text: "University of Leeds"
        },
        {
            value: 5922128002,
            text: "Nagoya University"
        },
        {
            value: 5922129002,
            text: "Universität Freiburg"
        },
        {
            value: 5922130002,
            text: "City University of Hong Kong"
        },
        {
            value: 5922131002,
            text: "The University of Adelaide"
        },
        {
            value: 5922132002,
            text: "Pohang University of Science And Technology (POSTECH)"
        },
        {
            value: 5922133002,
            text: "Freie Universität Berlin"
        },
        {
            value: 5922134002,
            text: "University of Basel"
        },
        {
            value: 5922135002,
            text: "University of Lausanne"
        },
        {
            value: 5922136002,
            text: "Université Pierre et Marie Curie (UPMC)"
        },
        {
            value: 5922137002,
            text: "Yonsei University"
        },
        {
            value: 5922138002,
            text: "University of York"
        },
        {
            value: 5922139002,
            text: "Queen Mary, University of London (QMUL)"
        },
        {
            value: 5922140002,
            text: "Karlsruhe Institute of Technology (KIT)"
        },
        {
            value: 5922141002,
            text: "KTH, Royal Institute of Technology"
        },
        {
            value: 5922142002,
            text: "Lomonosov Moscow State University"
        },
        {
            value: 5922143002,
            text: "Maastricht University"
        },
        {
            value: 5922144002,
            text: "University of Ghent"
        },
        {
            value: 5922145002,
            text: "Shanghai Jiao Tong University"
        },
        {
            value: 5922146002,
            text: "Humboldt-Universität zu Berlin"
        },
        {
            value: 5922147002,
            text: "Universidade de São Paulo (USP)"
        },
        {
            value: 5922148002,
            text: "Georg-August-Universität Göttingen"
        },
        {
            value: 5922149002,
            text: "Newcastle University"
        },
        {
            value: 5922150002,
            text: "University of Liverpool"
        },
        {
            value: 5922151002,
            text: "Kyushu University"
        },
        {
            value: 5922152002,
            text: "Eberhard Karls Universität Tübingen"
        },
        {
            value: 5922153002,
            text: "Technical University of Denmark"
        },
        {
            value: 5922154002,
            text: "Cardiff University"
        },
        {
            value: 5922155002,
            text: "Université Catholique de Louvain (UCL)"
        },
        {
            value: 5922156002,
            text: "University College Dublin"
        },
        {
            value: 5922157002,
            text: "McMaster University"
        },
        {
            value: 5922158002,
            text: "Hebrew University of Jerusalem"
        },
        {
            value: 5922159002,
            text: "Radboud University Nijmegen"
        },
        {
            value: 5922160002,
            text: "Hokkaido University"
        },
        {
            value: 5922161002,
            text: "Korea University"
        },
        {
            value: 5922162002,
            text: "University of Cape Town"
        },
        {
            value: 5922163002,
            text: "Rheinisch-Westfälische Technische Hochschule Aachen"
        },
        {
            value: 5922164002,
            text: "University of Aberdeen"
        },
        {
            value: 5922165002,
            text: "Wageningen University"
        },
        {
            value: 5922166002,
            text: "University of Bergen"
        },
        {
            value: 5922167002,
            text: "University of Bern"
        },
        {
            value: 5922168002,
            text: "University of Otago"
        },
        {
            value: 5922169002,
            text: "Lancaster University"
        },
        {
            value: 5922170002,
            text: "Eindhoven University of Technology"
        },
        {
            value: 5922171002,
            text: "Ecole Normale Supérieure de Lyon"
        },
        {
            value: 5922172002,
            text: "University of Vienna"
        },
        {
            value: 5922173002,
            text: "The Hong Kong Polytechnic University"
        },
        {
            value: 5922174002,
            text: "Sungkyunkwan University"
        },
        {
            value: 5922175002,
            text: "Rheinische Friedrich-Wilhelms-Universität Bonn"
        },
        {
            value: 5922176002,
            text: "Universidad Nacional Autónoma de México (UNAM)"
        },
        {
            value: 5922177002,
            text: "Zhejiang University"
        },
        {
            value: 5922178002,
            text: "Pontificia Universidad Católica de Chile"
        },
        {
            value: 5922179002,
            text: "Universiti Malaya (UM)"
        },
        {
            value: 5922180002,
            text: "Université Libre de Bruxelles (ULB)"
        },
        {
            value: 5922181002,
            text: "University of Exeter"
        },
        {
            value: 5922182002,
            text: "Stockholm University"
        },
        {
            value: 5922183002,
            text: "Queen's University of Belfast"
        },
        {
            value: 5922184002,
            text: "Vrije Universiteit Brussel (VUB)"
        },
        {
            value: 5922185002,
            text: "University of Science and Technology of China"
        },
        {
            value: 5922186002,
            text: "Nanjing University"
        },
        {
            value: 5922187002,
            text: "Universitat Autónoma de Barcelona"
        },
        {
            value: 5922188002,
            text: "University of Barcelona"
        },
        {
            value: 5922189002,
            text: "VU University Amsterdam"
        },
        {
            value: 5922190002,
            text: "Technion - Israel Institute of Technology"
        },
        {
            value: 5922191002,
            text: "Technische Universität Berlin"
        },
        {
            value: 5922192002,
            text: "University of Antwerp"
        },
        {
            value: 5922193002,
            text: "Universität Hamburg"
        },
        {
            value: 5922194002,
            text: "University of Bath"
        },
        {
            value: 5922195002,
            text: "University of Bologna"
        },
        {
            value: 5922196002,
            text: "Queen's University, Ontario"
        },
        {
            value: 5922197002,
            text: "Université Paris-Sud 11"
        },
        {
            value: 5922198002,
            text: "Keio University"
        },
        {
            value: 5922199002,
            text: "University of Sussex"
        },
        {
            value: 5922200002,
            text: "Universidad Autónoma de Madrid"
        },
        {
            value: 5922201002,
            text: "Aalto University"
        },
        {
            value: 5922202002,
            text: "Sapienza University of Rome"
        },
        {
            value: 5922203002,
            text: "Tel Aviv University"
        },
        {
            value: 5922204002,
            text: "National Tsing Hua University"
        },
        {
            value: 5922205002,
            text: "Chalmers University of Technology"
        },
        {
            value: 5922206002,
            text: "University of Leicester"
        },
        {
            value: 5922207002,
            text: "Université Paris Diderot - Paris 7"
        },
        {
            value: 5922208002,
            text: "University of Gothenburg"
        },
        {
            value: 5922209002,
            text: "University of Turku"
        },
        {
            value: 5922210002,
            text: "Universität Frankfurt am Main"
        },
        {
            value: 5922211002,
            text: "Universidad de Buenos Aires"
        },
        {
            value: 5922212002,
            text: "University College Cork"
        },
        {
            value: 5922213002,
            text: "University of Tsukuba"
        },
        {
            value: 5922214002,
            text: "University of Reading"
        },
        {
            value: 5922215002,
            text: "Sciences Po Paris"
        },
        {
            value: 5922216002,
            text: "Universidade Estadual de Campinas"
        },
        {
            value: 5922217002,
            text: "King Fahd University of Petroleum & Minerals"
        },
        {
            value: 5922218002,
            text: "University Complutense Madrid"
        },
        {
            value: 5922219002,
            text: "Université Paris-Sorbonne (Paris IV)"
        },
        {
            value: 5922220002,
            text: "University of Dundee"
        },
        {
            value: 5922221002,
            text: "Université Joseph Fourier - Grenoble 1"
        },
        {
            value: 5922222002,
            text: "Waseda University"
        },
        {
            value: 5922223002,
            text: "Indian Institute of Technology Delhi (IITD)"
        },
        {
            value: 5922224002,
            text: "Universidad de Chile"
        },
        {
            value: 5922225002,
            text: "Université Paris 1 Panthéon-Sorbonne"
        },
        {
            value: 5922226002,
            text: "Université de Strasbourg"
        },
        {
            value: 5922227002,
            text: "University of Twente"
        },
        {
            value: 5922228002,
            text: "University of East Anglia (UEA)"
        },
        {
            value: 5922229002,
            text: "National Chiao Tung University"
        },
        {
            value: 5922230002,
            text: "Politecnico di Milano"
        },
        {
            value: 5922231002,
            text: "Charles University"
        },
        {
            value: 5922232002,
            text: "Indian Institute of Technology Bombay (IITB)"
        },
        {
            value: 5922233002,
            text: "University of Milano"
        },
        {
            value: 5922234002,
            text: "Westfälische Wilhelms-Universität Münster"
        },
        {
            value: 5922235002,
            text: "University of Canterbury"
        },
        {
            value: 5922236002,
            text: "Chulalongkorn University"
        },
        {
            value: 5922237002,
            text: "Saint-Petersburg State University"
        },
        {
            value: 5922238002,
            text: "University of Liege"
        },
        {
            value: 5922239002,
            text: "Universität zu Köln"
        },
        {
            value: 5922240002,
            text: "Loughborough University"
        },
        {
            value: 5922241002,
            text: "National Cheng Kung University"
        },
        {
            value: 5922242002,
            text: "Universität Stuttgart"
        },
        {
            value: 5922243002,
            text: "Hanyang University"
        },
        {
            value: 5922244002,
            text: "American University of Beirut (AUB)"
        },
        {
            value: 5922245002,
            text: "Norwegian University of Science And Technology"
        },
        {
            value: 5922246002,
            text: "Beijing Normal University"
        },
        {
            value: 5922247002,
            text: "King Saud University"
        },
        {
            value: 5922248002,
            text: "University of Oulu"
        },
        {
            value: 5922249002,
            text: "Kyung Hee University"
        },
        {
            value: 5922250002,
            text: "University of Strathclyde"
        },
        {
            value: 5922251002,
            text: "Universität Ulm"
        },
        {
            value: 5922252002,
            text: "University of Pisa"
        },
        {
            value: 5922253002,
            text: "Technische Universität Darmstadt"
        },
        {
            value: 5922254002,
            text: "Technische Universität Dresden"
        },
        {
            value: 5922255002,
            text: "Macquarie University"
        },
        {
            value: 5922256002,
            text: "Vienna University of Technology"
        },
        {
            value: 5922257002,
            text: "Royal Holloway University of London"
        },
        {
            value: 5922258002,
            text: "Victoria University of Wellington"
        },
        {
            value: 5922259002,
            text: "University of Padua"
        },
        {
            value: 5922260002,
            text: "Universiti Kebangsaan Malaysia (UKM)"
        },
        {
            value: 5922261002,
            text: "University of Technology, Sydney"
        },
        {
            value: 5922262002,
            text: "Universität Konstanz"
        },
        {
            value: 5922263002,
            text: "Universidad de Los Andes Colombia"
        },
        {
            value: 5922264002,
            text: "Université Paris Descartes"
        },
        {
            value: 5922265002,
            text: "Tokyo Medical and Dental University"
        },
        {
            value: 5922266002,
            text: "University of Wollongong"
        },
        {
            value: 5922267002,
            text: "Universität Erlangen-Nürnberg"
        },
        {
            value: 5922268002,
            text: "Queensland University of Technology"
        },
        {
            value: 5922269002,
            text: "Tecnológico de Monterrey (ITESM)"
        },
        {
            value: 5922270002,
            text: "Universität Mannheim"
        },
        {
            value: 5922271002,
            text: "Universitat Pompeu Fabra"
        },
        {
            value: 5922272002,
            text: "Mahidol University"
        },
        {
            value: 5922273002,
            text: "Curtin University"
        },
        {
            value: 5922274002,
            text: "National University of Ireland, Galway"
        },
        {
            value: 5922275002,
            text: "Universidade Federal do Rio de Janeiro"
        },
        {
            value: 5922276002,
            text: "University of Surrey"
        },
        {
            value: 5922277002,
            text: "Hong Kong Baptist University"
        },
        {
            value: 5922278002,
            text: "Umeå University"
        },
        {
            value: 5922279002,
            text: "Universität Innsbruck"
        },
        {
            value: 5922280002,
            text: "RMIT University"
        },
        {
            value: 5922281002,
            text: "University of Eastern Finland"
        },
        {
            value: 5922282002,
            text: "Christian-Albrechts-Universität zu Kiel"
        },
        {
            value: 5922283002,
            text: "Indian Institute of Technology Kanpur (IITK)"
        },
        {
            value: 5922284002,
            text: "National Yang Ming University"
        },
        {
            value: 5922285002,
            text: "Johannes Gutenberg Universität Mainz"
        },
        {
            value: 5922286002,
            text: "The University of Newcastle"
        },
        {
            value: 5922287002,
            text: "Al-Farabi Kazakh National University"
        },
        {
            value: 5922288002,
            text: "École des Ponts ParisTech"
        },
        {
            value: 5922289002,
            text: "University of Jyväskylä"
        },
        {
            value: 5922290002,
            text: "L.N. Gumilyov Eurasian National University"
        },
        {
            value: 5922291002,
            text: "Kobe University"
        },
        {
            value: 5922292002,
            text: "University of Tromso"
        },
        {
            value: 5922293002,
            text: "Hiroshima University"
        },
        {
            value: 5922294002,
            text: "Université Bordeaux 1, Sciences Technologies"
        },
        {
            value: 5922295002,
            text: "University of Indonesia"
        },
        {
            value: 5922296002,
            text: "Universität Leipzig"
        },
        {
            value: 5922297002,
            text: "University of Southern Denmark"
        },
        {
            value: 5922298002,
            text: "Indian Institute of Technology Madras (IITM)"
        },
        {
            value: 5922299002,
            text: "University of The Witwatersrand"
        },
        {
            value: 5922300002,
            text: "University of Navarra"
        },
        {
            value: 5922301002,
            text: "Universidad Austral - Argentina"
        },
        {
            value: 5922302002,
            text: "Universidad Carlos III de Madrid"
        },
        {
            value: 5922303002,
            text: "Università¡ degli Studi di Roma - Tor Vergata"
        },
        {
            value: 5922304002,
            text: "Pontificia Universidad Católica Argentina Santa María de los Buenos Aires"
        },
        {
            value: 5922305002,
            text: "UCA"
        },
        {
            value: 5922306002,
            text: "Julius-Maximilians-Universität Würzburg"
        },
        {
            value: 5922307002,
            text: "Universidad Nacional de Colombia"
        },
        {
            value: 5922308002,
            text: "Laval University"
        },
        {
            value: 5922309002,
            text: "Ben Gurion University of The Negev"
        },
        {
            value: 5922310002,
            text: "Linköping University"
        },
        {
            value: 5922311002,
            text: "Aalborg University"
        },
        {
            value: 5922312002,
            text: "Bauman Moscow State Technical University"
        },
        {
            value: 5922313002,
            text: "Ecole Normale Supérieure de Cachan"
        },
        {
            value: 5922314002,
            text: "SOAS - School of Oriental and African Studies, University of London"
        },
        {
            value: 5922315002,
            text: "University of Essex"
        },
        {
            value: 5922316002,
            text: "University of Warsaw"
        },
        {
            value: 5922317002,
            text: "Griffith University"
        },
        {
            value: 5922318002,
            text: "University of South Australia"
        },
        {
            value: 5922319002,
            text: "Massey University"
        },
        {
            value: 5922320002,
            text: "University of Porto"
        },
        {
            value: 5922321002,
            text: "Universitat Politècnica de Catalunya"
        },
        {
            value: 5922322002,
            text: "Indian Institute of Technology Kharagpur (IITKGP)"
        },
        {
            value: 5922323002,
            text: "City University London"
        },
        {
            value: 5922324002,
            text: "Dublin City University"
        },
        {
            value: 5922325002,
            text: "Pontificia Universidad Javeriana"
        },
        {
            value: 5922326002,
            text: "James Cook University"
        },
        {
            value: 5922327002,
            text: "Novosibirsk State University"
        },
        {
            value: 5922328002,
            text: "Universidade Nova de Lisboa"
        },
        {
            value: 5922329002,
            text: "Université Aix-Marseille"
        },
        {
            value: 5922330002,
            text: "Universiti Sains Malaysia (USM)"
        },
        {
            value: 5922331002,
            text: "Universiti Teknologi Malaysia (UTM)"
        },
        {
            value: 5922332002,
            text: "Université Paris Dauphine"
        },
        {
            value: 5922333002,
            text: "University of Coimbra"
        },
        {
            value: 5922334002,
            text: "Brunel University"
        },
        {
            value: 5922335002,
            text: "King Abdul Aziz University (KAU)"
        },
        {
            value: 5922336002,
            text: "Ewha Womans University"
        },
        {
            value: 5922337002,
            text: "Nankai University"
        },
        {
            value: 5922338002,
            text: "Taipei Medical University"
        },
        {
            value: 5922339002,
            text: "Universität Jena"
        },
        {
            value: 5922340002,
            text: "Ruhr-Universität Bochum"
        },
        {
            value: 5922341002,
            text: "Heriot-Watt University"
        },
        {
            value: 5922342002,
            text: "Politecnico di Torino"
        },
        {
            value: 5922343002,
            text: "Universität Bremen"
        },
        {
            value: 5922344002,
            text: "Xi'an Jiaotong University"
        },
        {
            value: 5922345002,
            text: "Birkbeck College, University of London"
        },
        {
            value: 5922346002,
            text: "Oxford Brookes University"
        },
        {
            value: 5922347002,
            text: "Jagiellonian University"
        },
        {
            value: 5922348002,
            text: "University of Tampere"
        },
        {
            value: 5922349002,
            text: "University of Florence"
        },
        {
            value: 5922350002,
            text: "Deakin University"
        },
        {
            value: 5922351002,
            text: "University of the Philippines"
        },
        {
            value: 5922352002,
            text: "Universitat Politècnica de València"
        },
        {
            value: 5922353002,
            text: "Sun Yat-sen University"
        },
        {
            value: 5922354002,
            text: "Université Montpellier 2, Sciences et Techniques du Languedoc"
        },
        {
            value: 5922355002,
            text: "Moscow State Institute of International Relations (MGIMO-University)"
        },
        {
            value: 5922356002,
            text: "Stellenbosch University"
        },
        {
            value: 5922357002,
            text: "Politécnica de Madrid"
        },
        {
            value: 5922358002,
            text: "Instituto Tecnológico de Buenos Aires (ITBA)"
        },
        {
            value: 5922359002,
            text: "La Trobe University"
        },
        {
            value: 5922360002,
            text: "Université Paul Sabatier Toulouse III"
        },
        {
            value: 5922361002,
            text: "Karl-Franzens-Universität Graz"
        },
        {
            value: 5922362002,
            text: "Universität Düsseldorf"
        },
        {
            value: 5922363002,
            text: "University of Naples - Federico Ii"
        },
        {
            value: 5922364002,
            text: "Aston University"
        },
        {
            value: 5922365002,
            text: "University of Turin"
        },
        {
            value: 5922366002,
            text: "Beihang University (former BUAA)"
        },
        {
            value: 5922367002,
            text: "Indian Institute of Technology Roorkee (IITR)"
        },
        {
            value: 5922368002,
            text: "National Central University"
        },
        {
            value: 5922369002,
            text: "Sogang University"
        },
        {
            value: 5922370002,
            text: "Universität Regensburg"
        },
        {
            value: 5922371002,
            text: "Université Lille 1, Sciences et Technologie"
        },
        {
            value: 5922372002,
            text: "University of Tasmania"
        },
        {
            value: 5922373002,
            text: "University of Waikato"
        },
        {
            value: 5922374002,
            text: "Wuhan University"
        },
        {
            value: 5922375002,
            text: "National Taiwan University of Science And Technology"
        },
        {
            value: 5922376002,
            text: "Universidade Federal de São Paulo (UNIFESP)"
        },
        {
            value: 5922377002,
            text: "Università  degli Studi di Pavia"
        },
        {
            value: 5922378002,
            text: "Universität Bayreuth"
        },
        {
            value: 5922379002,
            text: "Université Claude Bernard Lyon 1"
        },
        {
            value: 5922380002,
            text: "Université du Québec"
        },
        {
            value: 5922381002,
            text: "Universiti Putra Malaysia (UPM)"
        },
        {
            value: 5922382002,
            text: "University of Kent"
        },
        {
            value: 5922383002,
            text: "University of St Gallen (HSG)"
        },
        {
            value: 5922384002,
            text: "Bond University"
        },
        {
            value: 5922385002,
            text: "United Arab Emirates University"
        },
        {
            value: 5922386002,
            text: "Universidad de San AndrÃ©s"
        },
        {
            value: 5922387002,
            text: "Universidad Nacional de La Plata"
        },
        {
            value: 5922388002,
            text: "Universität des Saarlandes"
        },
        {
            value: 5922389002,
            text: "American University of Sharjah (AUS)"
        },
        {
            value: 5922390002,
            text: "Bilkent University"
        },
        {
            value: 5922391002,
            text: "Flinders University"
        },
        {
            value: 5922392002,
            text: "Hankuk (Korea) University of Foreign Studies"
        },
        {
            value: 5922393002,
            text: "Middle East Technical University"
        },
        {
            value: 5922394002,
            text: "Philipps-Universität Marburg"
        },
        {
            value: 5922395002,
            text: "Swansea University"
        },
        {
            value: 5922396002,
            text: "Tampere University of Technology"
        },
        {
            value: 5922397002,
            text: "Universität Bielefeld"
        },
        {
            value: 5922398002,
            text: "University of Manitoba"
        },
        {
            value: 5922399002,
            text: "Chiba University"
        },
        {
            value: 5922400002,
            text: "Moscow Institute of Physics and Technology State University"
        },
        {
            value: 5922401002,
            text: "Tallinn University of Technology"
        },
        {
            value: 5922402002,
            text: "Taras Shevchenko National University of Kyiv"
        },
        {
            value: 5922403002,
            text: "Tokyo University of Science"
        },
        {
            value: 5922404002,
            text: "University of Salamanca"
        },
        {
            value: 5922405002,
            text: "University of Trento"
        },
        {
            value: 5922406002,
            text: "Université de Sherbrooke"
        },
        {
            value: 5922407002,
            text: "Université Panthéon-Assas (Paris 2)"
        },
        {
            value: 5922408002,
            text: "University of Delhi"
        },
        {
            value: 5922409002,
            text: "Abo Akademi University"
        },
        {
            value: 5922410002,
            text: "Czech Technical University In Prague"
        },
        {
            value: 5922411002,
            text: "Leibniz Universität Hannover"
        },
        {
            value: 5922412002,
            text: "Pusan National University"
        },
        {
            value: 5922413002,
            text: "Shanghai University"
        },
        {
            value: 5922414002,
            text: "St. Petersburg State Politechnical University"
        },
        {
            value: 5922415002,
            text: "Università  Cattolica del Sacro Cuore"
        },
        {
            value: 5922416002,
            text: "University of Genoa"
        },
        {
            value: 5922417002,
            text: "Bandung Institute of Technology (ITB)"
        },
        {
            value: 5922418002,
            text: "Bogazici University"
        },
        {
            value: 5922419002,
            text: "Goldsmiths, University of London"
        },
        {
            value: 5922420002,
            text: "National Sun Yat-sen University"
        },
        {
            value: 5922421002,
            text: "Renmin (People’s) University of China"
        },
        {
            value: 5922422002,
            text: "Universidad de Costa Rica"
        },
        {
            value: 5922423002,
            text: "Universidad de Santiago de Chile - USACH"
        },
        {
            value: 5922424002,
            text: "University of Tartu"
        },
        {
            value: 5922425002,
            text: "Aristotle University of Thessaloniki"
        },
        {
            value: 5922426002,
            text: "Auckland University of Technology"
        },
        {
            value: 5922427002,
            text: "Bangor University"
        },
        {
            value: 5922428002,
            text: "Charles Darwin University"
        },
        {
            value: 5922429002,
            text: "Kingston University, London"
        },
        {
            value: 5922430002,
            text: "Universitat de Valencia"
        },
        {
            value: 5922431002,
            text: "Université Montpellier 1"
        },
        {
            value: 5922432002,
            text: "University of Pretoria"
        },
        {
            value: 5922433002,
            text: "Lincoln University"
        },
        {
            value: 5922434002,
            text: "National Taiwan Normal University"
        },
        {
            value: 5922435002,
            text: "National University of Sciences And Technology (NUST) Islamabad"
        },
        {
            value: 5922436002,
            text: "Swinburne University of Technology"
        },
        {
            value: 5922437002,
            text: "Tongji University"
        },
        {
            value: 5922438002,
            text: "Universidad de Zaragoza"
        },
        {
            value: 5922439002,
            text: "Universidade Federal de Minas Gerais"
        },
        {
            value: 5922440002,
            text: "Universität Duisburg-Essen"
        },
        {
            value: 5922441002,
            text: "Al-Imam Mohamed Ibn Saud Islamic University"
        },
        {
            value: 5922442002,
            text: "Harbin Institute of Technology"
        },
        {
            value: 5922443002,
            text: "People's Friendship University of Russia"
        },
        {
            value: 5922444002,
            text: "Universidade Estadual PaulistaJúlio de Mesquita Filho' (UNESP)"
        },
        {
            value: 5922445002,
            text: "Université Nice Sophia-Antipolis"
        },
        {
            value: 5922446002,
            text: "University of Crete"
        },
        {
            value: 5922447002,
            text: "University of Milano-Bicocca"
        },
        {
            value: 5922448002,
            text: "Ateneo de Manila University"
        },
        {
            value: 5922449002,
            text: "Beijing Institute of Technology"
        },
        {
            value: 5922450002,
            text: "Chang Gung University"
        },
        {
            value: 5922451002,
            text: "hung-Ang University"
        },
        {
            value: 5922452002,
            text: "Dublin Institute of Technology"
        },
        {
            value: 5922453002,
            text: "Huazhong University of Science and Technology"
        },
        {
            value: 5922454002,
            text: "International Islamic University Malaysia (IIUM)"
        },
        {
            value: 5922455002,
            text: "Johannes Kepler University Linz"
        },
        {
            value: 5922456002,
            text: "Justus-Liebig-Universität Gießen"
        },
        {
            value: 5922457002,
            text: "Kanazawa University"
        },
        {
            value: 5922458002,
            text: "Keele University"
        },
        {
            value: 5922459002,
            text: "Koc University"
        },
        {
            value: 5922460002,
            text: "National and Kapodistrian University of Athens"
        },
        {
            value: 5922461002,
            text: "National Research University – Higher School of Economics (HSE)"
        },
        {
            value: 5922462002,
            text: "National Technical University of Athens"
        },
        {
            value: 5922463002,
            text: "Okayama University"
        },
        {
            value: 5922464002,
            text: "Sabanci University"
        },
        {
            value: 5922465002,
            text: "Southeast University"
        },
        {
            value: 5922466002,
            text: "Sultan Qaboos University"
        },
        {
            value: 5922467002,
            text: "Technische Universität Braunschweig"
        },
        {
            value: 5922468002,
            text: "Technische Universität Dortmund"
        },
        {
            value: 5922469002,
            text: "The Catholic University of Korea"
        },
        {
            value: 5922470002,
            text: "Tianjin University"
        },
        {
            value: 5922471002,
            text: "Tokyo Metropolitan University"
        },
        {
            value: 5922472002,
            text: "Universidad de Antioquia"
        },
        {
            value: 5922473002,
            text: "University of Granada"
        },
        {
            value: 5922474002,
            text: "Universidad de Palermo"
        },
        {
            value: 5922475002,
            text: "Universidad Nacional de Córdoba"
        },
        {
            value: 5922476002,
            text: "Universidade de Santiago de Compostela"
        },
        {
            value: 5922477002,
            text: "Universidade Federal do Rio Grande Do Sul"
        },
        {
            value: 5922478002,
            text: "University of Siena"
        },
        {
            value: 5922479002,
            text: "University of Trieste"
        },
        {
            value: 5922480002,
            text: "Universitas Gadjah Mada"
        },
        {
            value: 5922481002,
            text: "Université de Lorraine"
        },
        {
            value: 5922482002,
            text: "Université de Rennes 1"
        },
        {
            value: 5922483002,
            text: "University of Bradford"
        },
        {
            value: 5922484002,
            text: "University of Hull"
        },
        {
            value: 5922485002,
            text: "University of Kwazulu-Natal"
        },
        {
            value: 5922486002,
            text: "University of Limerick"
        },
        {
            value: 5922487002,
            text: "University of Stirling"
        },
        {
            value: 5922488002,
            text: "University of Szeged"
        },
        {
            value: 5922489002,
            text: "Ural Federal University"
        },
        {
            value: 5922490002,
            text: "Xiamen University"
        },
        {
            value: 5922491002,
            text: "Yokohama City University"
        },
        {
            value: 5922492002,
            text: "Aberystwyth University"
        },
        {
            value: 5922493002,
            text: "Belarus State University"
        },
        {
            value: 5922494002,
            text: "Cairo University"
        },
        {
            value: 5922495002,
            text: "Chiang Mai University"
        },
        {
            value: 5922496002,
            text: "Chonbuk National University"
        },
        {
            value: 5922497002,
            text: "Eötvös Loránd University"
        },
        {
            value: 5922498002,
            text: "Inha University"
        },
        {
            value: 5922499002,
            text: "Instituto Politécnico Nacional (IPN)"
        },
        {
            value: 5922500002,
            text: "Istanbul Technical University"
        },
        {
            value: 5922501002,
            text: "Kumamoto University"
        },
        {
            value: 5922502002,
            text: "Kyungpook National University"
        },
        {
            value: 5922503002,
            text: "Lingnan University (Hong Kong)"
        },
        {
            value: 5922504002,
            text: "Masaryk University"
        },
        {
            value: 5922505002,
            text: "Murdoch University"
        },
        {
            value: 5922506002,
            text: "Nagasaki University"
        },
        {
            value: 5922507002,
            text: "National Chung Hsing University"
        },
        {
            value: 5922508002,
            text: "National Taipei University of Technology"
        },
        {
            value: 5922509002,
            text: "National University of Ireland Maynooth"
        },
        {
            value: 5922510002,
            text: "Osaka City University"
        },
        {
            value: 5922511002,
            text: "Pontificia Universidad Católica del Perú"
        },
        {
            value: 5922512002,
            text: "Pontificia Universidade Católica de São Paulo (PUC -SP)"
        },
        {
            value: 5922513002,
            text: "Pontificia Universidade Católica do Rio de Janeiro (PUC - Rio)"
        },
        {
            value: 5922514002,
            text: "Qatar University"
        },
        {
            value: 5922515002,
            text: "Rhodes University"
        },
        {
            value: 5922516002,
            text: "Tokyo University of Agriculture and Technology"
        },
        {
            value: 5922517002,
            text: "Tomsk Polytechnic University"
        },
        {
            value: 5922518002,
            text: "Tomsk State University"
        },
        {
            value: 5922519002,
            text: "Umm Al-Qura University"
        },
        {
            value: 5922520002,
            text: "Universidad Católica Andrés Bello - UCAB"
        },
        {
            value: 5922521002,
            text: "Universidad Central de Venezuela - UCV"
        },
        {
            value: 5922522002,
            text: "Universidad de Belgrano"
        },
        {
            value: 5922523002,
            text: "Universidad de Concepción"
        },
        {
            value: 5922524002,
            text: "Universidad de Sevilla"
        },
        {
            value: 5922525002,
            text: "Universidade Catolica Portuguesa, Lisboa"
        },
        {
            value: 5922526002,
            text: "Universidade de Brasilia (UnB)"
        },
        {
            value: 5922527002,
            text: "University of Lisbon"
        },
        {
            value: 5922528002,
            text: "University of Ljubljana"
        },
        {
            value: 5922529002,
            text: "University of Seoul"
        },
        {
            value: 5922530002,
            text: "Abu Dhabi University"
        },
        {
            value: 5922531002,
            text: "Ain Shams University"
        },
        {
            value: 5922532002,
            text: "Ajou University"
        },
        {
            value: 5922533002,
            text: "De La Salle University"
        },
        {
            value: 5922534002,
            text: "Dongguk University"
        },
        {
            value: 5922535002,
            text: "Gifu University"
        },
        {
            value: 5922536002,
            text: "Hacettepe University"
        },
        {
            value: 5922537002,
            text: "Indian Institute of Technology Guwahati (IITG)"
        },
        {
            value: 5922538002,
            text: "Jilin University"
        },
        {
            value: 5922539002,
            text: "Kazan Federal University"
        },
        {
            value: 5922540002,
            text: "King Khalid University"
        },
        {
            value: 5922541002,
            text: "Martin-Luther-Universität Halle-Wittenberg"
        },
        {
            value: 5922542002,
            text: "National Chengchi University"
        },
        {
            value: 5922543002,
            text: "National Technical University of UkraineKyiv Polytechnic Institute'"
        },
        {
            value: 5922544002,
            text: "Niigata University"
        },
        {
            value: 5922545002,
            text: "Osaka Prefecture University"
        },
        {
            value: 5922546002,
            text: "Paris Lodron University of Salzburg"
        },
        {
            value: 5922547002,
            text: "Sharif University of Technology"
        },
        {
            value: 5922548002,
            text: "Southern Federal University"
        },
        {
            value: 5922549002,
            text: "Thammasat University"
        },
        {
            value: 5922550002,
            text: "Universidad de Guadalajara (UDG)"
        },
        {
            value: 5922551002,
            text: "Universidad de la República (UdelaR)"
        },
        {
            value: 5922552002,
            text: "Universidad Iberoamericana (UIA)"
        },
        {
            value: 5922553002,
            text: "Universidad Torcuato Di Tella"
        },
        {
            value: 5922554002,
            text: "Universidade Federal da Bahia"
        },
        {
            value: 5922555002,
            text: "Universidade Federal de São Carlos"
        },
        {
            value: 5922556002,
            text: "Universidade Federal de Viçosa"
        },
        {
            value: 5922557002,
            text: "Perugia University"
        },
        {
            value: 5922558002,
            text: "Université de Nantes"
        },
        {
            value: 5922559002,
            text: "Université Saint-Joseph de Beyrouth"
        },
        {
            value: 5922560002,
            text: "University of Canberra"
        },
        {
            value: 5922561002,
            text: "University of Debrecen"
        },
        {
            value: 5922562002,
            text: "University of Johannesburg"
        },
        {
            value: 5922563002,
            text: "University of Mumbai"
        },
        {
            value: 5922564002,
            text: "University of Patras"
        },
        {
            value: 5922565002,
            text: "University of Tehran"
        },
        {
            value: 5922566002,
            text: "University of Ulsan"
        },
        {
            value: 5922567002,
            text: "University of Ulster"
        },
        {
            value: 5922568002,
            text: "University of Zagreb"
        },
        {
            value: 5922569002,
            text: "Vilnius University"
        },
        {
            value: 5922570002,
            text: "Warsaw University of Technology"
        },
        {
            value: 5922571002,
            text: "Al Azhar University"
        },
        {
            value: 5922572002,
            text: "Bar-Ilan University"
        },
        {
            value: 5922573002,
            text: "Brno University of Technology"
        },
        {
            value: 5922574002,
            text: "Chonnam National University"
        },
        {
            value: 5922575002,
            text: "Chungnam National University"
        },
        {
            value: 5922576002,
            text: "Corvinus University of Budapest"
        },
        {
            value: 5922577002,
            text: "Gunma University"
        },
        {
            value: 5922578002,
            text: "Hallym University"
        },
        {
            value: 5922579002,
            text: "Instituto Tecnológico Autonomo de México (ITAM)"
        },
        {
            value: 5922580002,
            text: "Istanbul University"
        },
        {
            value: 5922581002,
            text: "Jordan University of Science & Technology"
        },
        {
            value: 5922582002,
            text: "Kasetsart University"
        },
        {
            value: 5922583002,
            text: "Kazakh-British Technical University"
        },
        {
            value: 5922584002,
            text: "Khazar University"
        },
        {
            value: 5922585002,
            text: "London Metropolitan University"
        },
        {
            value: 5922586002,
            text: "Middlesex University"
        },
        {
            value: 5922587002,
            text: "Universidad Industrial de Santander"
        },
        {
            value: 5922588002,
            text: "Pontificia Universidad Católica de Valparaíso"
        },
        {
            value: 5922589002,
            text: "Pontificia Universidade Católica do Rio Grande do Sul"
        },
        {
            value: 5922590002,
            text: "Qafqaz University"
        },
        {
            value: 5922591002,
            text: "Ritsumeikan University"
        },
        {
            value: 5922592002,
            text: "Shandong University"
        },
        {
            value: 5922593002,
            text: "University of St. Kliment Ohridski"
        },
        {
            value: 5922594002,
            text: "South Kazakhstan State University (SKSU)"
        },
        {
            value: 5922595002,
            text: "Universidad Adolfo Ibáñez"
        },
        {
            value: 5922596002,
            text: "Universidad Autónoma del Estado de México"
        },
        {
            value: 5922597002,
            text: "Universidad Autónoma Metropolitana (UAM)"
        },
        {
            value: 5922598002,
            text: "Universidad de Alcalá"
        },
        {
            value: 5922599002,
            text: "Universidad Nacional Costa Rica"
        },
        {
            value: 5922600002,
            text: "Universidad Nacional de Mar del Plata"
        },
        {
            value: 5922601002,
            text: "Universidad Peruana Cayetano Heredia"
        },
        {
            value: 5922602002,
            text: "Universidad Simón Bolívar Venezuela"
        },
        {
            value: 5922603002,
            text: "Universidade Federal de Santa Catarina"
        },
        {
            value: 5922604002,
            text: "Universidade Federal do Paraná (UFPR)"
        },
        {
            value: 5922605002,
            text: "Universidade Federal Fluminense"
        },
        {
            value: 5922606002,
            text: "University of Modena"
        },
        {
            value: 5922607002,
            text: "Université Lumière Lyon 2"
        },
        {
            value: 5922608002,
            text: "Université Toulouse 1, Capitole"
        },
        {
            value: 5922609002,
            text: "University of Economics Prague"
        },
        {
            value: 5922610002,
            text: "University of Hertfordshire"
        },
        {
            value: 5922611002,
            text: "University of Plymouth"
        },
        {
            value: 5922612002,
            text: "University of Salford"
        },
        {
            value: 5922613002,
            text: "University of Science and Technology Beijing"
        },
        {
            value: 5922614002,
            text: "University of Western Sydney"
        },
        {
            value: 5922615002,
            text: "Yamaguchi University"
        },
        {
            value: 5922616002,
            text: "Yokohama National University"
        },
        {
            value: 5922617002,
            text: "Airlangga University"
        },
        {
            value: 5922618002,
            text: "Alexandria University"
        },
        {
            value: 5922619002,
            text: "Alexandru Ioan Cuza University"
        },
        {
            value: 5922620002,
            text: "Alpen-Adria-Universität Klagenfurt"
        },
        {
            value: 5922621002,
            text: "Aoyama Gakuin University"
        },
        {
            value: 5922622002,
            text: "Athens University of Economy And Business"
        },
        {
            value: 5922623002,
            text: "Babes-Bolyai University"
        },
        {
            value: 5922624002,
            text: "Baku State University"
        },
        {
            value: 5922625002,
            text: "Belarusian National Technical University"
        },
        {
            value: 5922626002,
            text: "Benemérita Universidad Autónoma de Puebla"
        },
        {
            value: 5922627002,
            text: "Bogor Agricultural University"
        },
        {
            value: 5922628002,
            text: "Coventry University"
        },
        {
            value: 5922629002,
            text: "Cukurova University"
        },
        {
            value: 5922630002,
            text: "Diponegoro University"
        },
        {
            value: 5922631002,
            text: "Donetsk National University"
        },
        {
            value: 5922632002,
            text: "Doshisha University"
        },
        {
            value: 5922633002,
            text: "E.A.Buketov Karaganda State University"
        },
        {
            value: 5922634002,
            text: "Far Eastern Federal University"
        },
        {
            value: 5922635002,
            text: "Fu Jen Catholic University"
        },
        {
            value: 5922636002,
            text: "Kagoshima University"
        },
        {
            value: 5922637002,
            text: "Kaunas University of Technology"
        },
        {
            value: 5922638002,
            text: "Kazakh Ablai khan University of International Relations and World Languages"
        },
        {
            value: 5922639002,
            text: "Kazakh National Pedagogical University Abai"
        },
        {
            value: 5922640002,
            text: "Kazakh National Technical University"
        },
        {
            value: 5922641002,
            text: "Khon Kaen University"
        },
        {
            value: 5922642002,
            text: "King Faisal University"
        },
        {
            value: 5922643002,
            text: "King Mongkut''s University of Technology Thonburi"
        },
        {
            value: 5922644002,
            text: "Kuwait University"
        },
        {
            value: 5922645002,
            text: "Lodz University"
        },
        {
            value: 5922646002,
            text: "Manchester Metropolitan University"
        },
        {
            value: 5922647002,
            text: "Lobachevsky State University of Nizhni Novgorod"
        },
        {
            value: 5922648002,
            text: "National Technical UniversityKharkiv Polytechnic Institute'"
        },
        {
            value: 5922649002,
            text: "Nicolaus Copernicus University"
        },
        {
            value: 5922650002,
            text: "Northumbria University at Newcastle"
        },
        {
            value: 5922651002,
            text: "Nottingham Trent University"
        },
        {
            value: 5922652002,
            text: "Ochanomizu University"
        },
        {
            value: 5922653002,
            text: "Plekhanov Russian University of Economics"
        },
        {
            value: 5922654002,
            text: "Pontificia Universidad Catolica del Ecuador"
        },
        {
            value: 5922655002,
            text: "Prince of Songkla University"
        },
        {
            value: 5922656002,
            text: "S.Seifullin Kazakh Agro Technical University"
        },
        {
            value: 5922657002,
            text: "Saitama University"
        },
        {
            value: 5922658002,
            text: "Sepuluh Nopember Institute of Technology"
        },
        {
            value: 5922659002,
            text: "Shinshu University"
        },
        {
            value: 5922660002,
            text: "The Robert Gordon University"
        },
        {
            value: 5922661002,
            text: "Tokai University"
        },
        {
            value: 5922662002,
            text: "Universidad ANAHUAC"
        },
        {
            value: 5922663002,
            text: "Universidad Austral de Chile"
        },
        {
            value: 5922664002,
            text: "University Autónoma de Nuevo León (UANL)"
        },
        {
            value: 5922665002,
            text: "Universidad de la Habana"
        },
        {
            value: 5922666002,
            text: "Universidad de La Sabana"
        },
        {
            value: 5922667002,
            text: "Universidad de las Américas Puebla (UDLAP)"
        },
        {
            value: 5922668002,
            text: "Universidad de los Andes Mérida"
        },
        {
            value: 5922669002,
            text: "University of Murcia"
        },
        {
            value: 5922670002,
            text: "Universidad de Puerto Rico"
        },
        {
            value: 5922671002,
            text: "Universidad de San Francisco de Quito"
        },
        {
            value: 5922672002,
            text: "Universidad de Talca"
        },
        {
            value: 5922673002,
            text: "Universidad del Norte"
        },
        {
            value: 5922674002,
            text: "Universidad del Rosario"
        },
        {
            value: 5922675002,
            text: "Universidad del Valle"
        },
        {
            value: 5922676002,
            text: "Universidad Nacional de Cuyo"
        },
        {
            value: 5922677002,
            text: "Universidad Nacional de Rosario"
        },
        {
            value: 5922678002,
            text: "Universidad Nacional de Tucumán"
        },
        {
            value: 5922679002,
            text: "Universidad Nacional del Sur"
        },
        {
            value: 5922680002,
            text: "Universidad Nacional Mayor de San Marcos"
        },
        {
            value: 5922681002,
            text: "Universidad Técnica Federico Santa María"
        },
        {
            value: 5922682002,
            text: "Universidad Tecnológica Nacional (UTN)"
        },
        {
            value: 5922683002,
            text: "Universidade do Estado do Rio de Janeiro (UERJ)"
        },
        {
            value: 5922684002,
            text: "Universidade Estadual de Londrina (UEL)"
        },
        {
            value: 5922685002,
            text: "Universidade Federal de Santa Maria"
        },
        {
            value: 5922686002,
            text: "Universidade Federal do Ceará (UFC)"
        },
        {
            value: 5922687002,
            text: "Universidade Federal do Pernambuco"
        },
        {
            value: 5922688002,
            text: "Università  Ca'' Foscari Venezia"
        },
        {
            value: 5922689002,
            text: "Catania University"
        },
        {
            value: 5922690002,
            text: "Università degli Studi Roma Tre"
        },
        {
            value: 5922691002,
            text: "Université Charles-de-Gaulle Lille 3"
        },
        {
            value: 5922692002,
            text: "Université de Caen Basse-Normandie"
        },
        {
            value: 5922693002,
            text: "Université de Cergy-Pontoise"
        },
        {
            value: 5922694002,
            text: "Université de Poitiers"
        },
        {
            value: 5922695002,
            text: "Université Jean Moulin Lyon 3"
        },
        {
            value: 5922696002,
            text: "Université Lille 2 Droit et Santé"
        },
        {
            value: 5922697002,
            text: "Université Paris Ouest Nanterre La Défense"
        },
        {
            value: 5922698002,
            text: "Université Paul-Valéry Montpellier 3"
        },
        {
            value: 5922699002,
            text: "Université Pierre Mendès France - Grenoble 2"
        },
        {
            value: 5922700002,
            text: "Université Stendhal Grenoble 3"
        },
        {
            value: 5922701002,
            text: "Université Toulouse II, Le Mirail"
        },
        {
            value: 5922702002,
            text: "Universiti Teknologi MARA - UiTM"
        },
        {
            value: 5922703002,
            text: "University of Baghdad"
        },
        {
            value: 5922704002,
            text: "University of Bahrain"
        },
        {
            value: 5922705002,
            text: "University of Bari"
        },
        {
            value: 5922706002,
            text: "University of Belgrade"
        },
        {
            value: 5922707002,
            text: "University of Brawijaya"
        },
        {
            value: 5922708002,
            text: "University of Brescia"
        },
        {
            value: 5922709002,
            text: "University of Bucharest"
        },
        {
            value: 5922710002,
            text: "University of Calcutta"
        },
        {
            value: 5922711002,
            text: "University of Central Lancashire"
        },
        {
            value: 5922712002,
            text: "University of Colombo"
        },
        {
            value: 5922713002,
            text: "University of Dhaka"
        },
        {
            value: 5922714002,
            text: "University of East London"
        },
        {
            value: 5922715002,
            text: "University of Engineering & Technology (UET) Lahore"
        },
        {
            value: 5922716002,
            text: "University of Greenwich"
        },
        {
            value: 5922717002,
            text: "University of Jordan"
        },
        {
            value: 5922718002,
            text: "University of Karachi"
        },
        {
            value: 5922719002,
            text: "University of Lahore"
        },
        {
            value: 5922720002,
            text: "University of Latvia"
        },
        {
            value: 5922721002,
            text: "University of New England"
        },
        {
            value: 5922722002,
            text: "University of Pune"
        },
        {
            value: 5922723002,
            text: "University of Santo Tomas"
        },
        {
            value: 5922724002,
            text: "University of Southern Queensland"
        },
        {
            value: 5922725002,
            text: "University of Wroclaw"
        },
        {
            value: 5922726002,
            text: "Verona University"
        },
        {
            value: 5922727002,
            text: "Victoria University"
        },
        {
            value: 5922728002,
            text: "Vilnius Gediminas Technical University"
        },
        {
            value: 5922729002,
            text: "Voronezh State University"
        },
        {
            value: 5922730002,
            text: "Vytautas Magnus University"
        },
        {
            value: 5922731002,
            text: "West University of Timisoara"
        },
        {
            value: 5922732002,
            text: "University of South Alabama"
        },
        {
            value: 5922733002,
            text: "University of Arkansas"
        },
        {
            value: 5922734002,
            text: "University of California - Berkeley"
        },
        {
            value: 5922735002,
            text: "University of Connecticut"
        },
        {
            value: 5922736002,
            text: "University of South Florida"
        },
        {
            value: 5922737002,
            text: "University of Georgia"
        },
        {
            value: 5922738002,
            text: "University of Hawaii - Manoa"
        },
        {
            value: 5922739002,
            text: "Iowa State University"
        },
        {
            value: 5922740002,
            text: "Murray State University"
        },
        {
            value: 5922741002,
            text: "University of Louisville"
        },
        {
            value: 5922742002,
            text: "Western Kentucky University"
        },
        {
            value: 5922743002,
            text: "Louisiana State University - Baton Rouge"
        },
        {
            value: 5922744002,
            text: "University of Maryland - College Park"
        },
        {
            value: 5922745002,
            text: "University of Minnesota - Twin Cities"
        },
        {
            value: 5922746002,
            text: "University of Montana"
        },
        {
            value: 5922747002,
            text: "East Carolina University"
        },
        {
            value: 5922748002,
            text: "University of North Carolina - Chapel Hill"
        },
        {
            value: 5922749002,
            text: "Wake Forest University"
        },
        {
            value: 5922750002,
            text: "University of Nebraska - Lincoln"
        },
        {
            value: 5922751002,
            text: "New Mexico State University"
        },
        {
            value: 5922752002,
            text: "Ohio State University - Columbus"
        },
        {
            value: 5922753002,
            text: "University of Oklahoma"
        },
        {
            value: 5922754002,
            text: "Pennsylvania State University - University Park"
        },
        {
            value: 5922755002,
            text: "University of Pittsburgh"
        },
        {
            value: 5922756002,
            text: "University of Tennessee - Chattanooga"
        },
        {
            value: 5922757002,
            text: "Vanderbilt University"
        },
        {
            value: 5922758002,
            text: "Rice University"
        },
        {
            value: 5922759002,
            text: "University of Utah"
        },
        {
            value: 5922760002,
            text: "University of Richmond"
        },
        {
            value: 5922761002,
            text: "University of Arkansas - Pine Bluff"
        },
        {
            value: 5922762002,
            text: "University of Central Florida"
        },
        {
            value: 5922763002,
            text: "Florida Atlantic University"
        },
        {
            value: 5922764002,
            text: "Hampton University"
        },
        {
            value: 5922765002,
            text: "Liberty University"
        },
        {
            value: 5922766002,
            text: "Mercer University"
        },
        {
            value: 5922767002,
            text: "Middle Tennessee State University"
        },
        {
            value: 5922768002,
            text: "University of Nevada - Las Vegas"
        },
        {
            value: 5922769002,
            text: "South Carolina State University"
        },
        {
            value: 5922770002,
            text: "University of Tennessee - Martin"
        },
        {
            value: 5922771002,
            text: "Weber State University"
        },
        {
            value: 5922772002,
            text: "Youngstown State University"
        },
        {
            value: 5922773002,
            text: "University of the Incarnate Word"
        },
        {
            value: 5922774002,
            text: "University of Washington"
        },
        {
            value: 5922775002,
            text: "University of Louisiana - Lafayette"
        },
        {
            value: 5922776002,
            text: "Coastal Carolina University"
        },
        {
            value: 5922777002,
            text: "Utah State University"
        },
        {
            value: 5922778002,
            text: "University of Alabama"
        },
        {
            value: 5922779002,
            text: "University of Illinois - Urbana-Champaign"
        },
        {
            value: 5922780002,
            text: "United States Air Force Academy"
        },
        {
            value: 5922781002,
            text: "University of Akron"
        },
        {
            value: 5922782002,
            text: "University of Central Arkansas"
        },
        {
            value: 5922783002,
            text: "University of Kansas"
        },
        {
            value: 5922784002,
            text: "University of Northern Colorado"
        },
        {
            value: 5922785002,
            text: "University of Northern Iowa"
        },
        {
            value: 5922786002,
            text: "University of South Carolina"
        },
        {
            value: 5922787002,
            text: "Tennessee Technological University"
        },
        {
            value: 5922788002,
            text: "University of Texas - El Paso"
        },
        {
            value: 5922789002,
            text: "Texas Tech University"
        },
        {
            value: 5922790002,
            text: "Tulane University"
        },
        {
            value: 5922791002,
            text: "Virginia Military Institute"
        },
        {
            value: 5922792002,
            text: "Western Michigan University"
        },
        {
            value: 5922793002,
            text: "Wilfrid Laurier University"
        },
        {
            value: 5922794002,
            text: "University of San Diego"
        },
        {
            value: 5922795002,
            text: "University of California - San Diego"
        },
        {
            value: 5922796002,
            text: "Brooks Institute of Photography"
        },
        {
            value: 5922797002,
            text: "Acupuncture and Integrative Medicine College - Berkeley"
        },
        {
            value: 5922798002,
            text: "Southern Alberta Institute of Technology"
        },
        {
            value: 5922799002,
            text: "Susquehanna University"
        },
        {
            value: 5922800002,
            text: "University of Texas - Dallas"
        },
        {
            value: 5922801002,
            text: "Thunderbird School of Global Management"
        },
        {
            value: 5922802002,
            text: "Presidio Graduate School"
        },
        {
            value: 5922803002,
            text: "École supérieure de commerce de Dijon"
        },
        {
            value: 5922804002,
            text: "University of California - San Francisco"
        },
        {
            value: 5922805002,
            text: "Hack Reactor"
        },
        {
            value: 5922806002,
            text: "St. Mary''s College of California"
        },
        {
            value: 5922807002,
            text: "New England Law"
        },
        {
            value: 5922808002,
            text: "University of California, Merced"
        },
        {
            value: 5922809002,
            text: "University of California, Hastings College of the Law"
        },
        {
            value: 5922810002,
            text: "V.N. Karazin Kharkiv National University"
        },
        {
            value: 5922811002,
            text: "SIM University (UniSIM)"
        },
        {
            value: 5922812002,
            text: "Singapore Management University (SMU)"
        },
        {
            value: 5922813002,
            text: "Singapore University of Technology and Design (SUTD)"
        },
        {
            value: 5922814002,
            text: "Singapore Institute of Technology (SIT)"
        },
        {
            value: 5922815002,
            text: "Nanyang Polytechnic (NYP)"
        },
        {
            value: 5922816002,
            text: "Ngee Ann Polytechnic (NP)"
        },
        {
            value: 5922817002,
            text: "Republic Polytechnic (RP)"
        },
        {
            value: 5922818002,
            text: "Singapore Polytechnic (SP)"
        },
        {
            value: 5922819002,
            text: "Temasek Polytechnic (TP)"
        },
        {
            value: 5922820002,
            text: "INSEAD"
        },
        {
            value: 5922821002,
            text: "Fundação Getúlio Vargas"
        },
        {
            value: 5922822002,
            text: "Acharya Nagarjuna University"
        },
        {
            value: 5922823002,
            text: "University of California - Santa Barbara"
        },
        {
            value: 5922824002,
            text: "University of California - Irvine"
        },
        {
            value: 5922825002,
            text: "California State University - Long Beach"
        },
        {
            value: 5922826002,
            text: "Robert Morris University Illinois"
        },
        {
            value: 5922827002,
            text: "Harold Washington College - City Colleges of Chicago"
        },
        {
            value: 5922828002,
            text: "Harry S Truman College - City Colleges of Chicago"
        },
        {
            value: 5922829002,
            text: "Kennedy-King College - City Colleges of Chicago"
        },
        {
            value: 5922830002,
            text: "Malcolm X College - City Colleges of Chicago"
        },
        {
            value: 5922831002,
            text: "Olive-Harvey College - City Colleges of Chicago"
        },
        {
            value: 5922832002,
            text: "Richard J Daley College -  City Colleges of Chicago"
        },
        {
            value: 5922833002,
            text: "Wilbur Wright College - City Colleges of Chicago"
        },
        {
            value: 5922834002,
            text: "Abertay University"
        },
        {
            value: 5922835002,
            text: "Pontifícia Universidade Católica de Minas Gerais"
        },
        {
            value: 16771886002,
            text: "Other"
        },
        {
            value: 25221480002,
            text: "Atlanta College of Arts"
        }
    ]

    return (
        <Combobox items={schools} itemsName="schools" onSelect={onSelect} />
    )
}

