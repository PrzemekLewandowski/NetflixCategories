import {Categories} from './categories';

export abstract class Data {
  static readonly CATEGORIES: Array<Categories> = [
    {
      link: 1365, name: 'Action & Adventure ', categories: [
        'Action', 'Adventure']
    },
    {
      link: 77232, name: 'Asian Action Movies ', categories: [
        'Asian', 'Action', 'Movies']
    },
    {
      link: 46576, name: 'Classic Action & Adventure ', categories: [
        'Classic', 'Action', 'Adventure']
    },
    {
      link: 43040, name: 'Action Comedies ', categories: [
        'Action', 'Comedies']
    },
    {
      link: 43048, name: 'Action Thrillers ', categories: [
        'Action', 'Thrillers']
    },
    {
      link: 7442, name: 'Adventures ', categories: [
        'Adventures']
    },
    {
      link: 10118, name: 'Comic Book and Superhero Movies ', categories: [
        'Comic', 'Book', 'and', 'Superhero', 'Movies']
    },
    {
      link: 7700, name: 'Westerns ', categories: [
        'Westerns']
    },
    {
      link: 10702, name: 'Spy Action & Adventure ', categories: [
        'Spy', 'Action', 'Adventure']
    },
    {
      link: 9584, name: 'Crime Action & Adventure ', categories: [
        'Crime', 'Action', 'Adventure']
    },
    {
      link: 11828, name: 'Foreign Action & Adventure ', categories: [
        'Foreign', 'Action', 'Adventure']
    },
    {
      link: 8985, name: 'Martial Arts Movies ', categories: [
        'Martial', 'Arts', 'Movies']
    },
    {
      link: 2125, name: 'Military Action & Adventure ', categories: [
        'Military', 'Action', 'Adventure']
    },
    {
      link: 7424, name: 'Anime ', categories: [
        'Anime']
    },
    {
      link: 11881, name: 'Adult Animation ', categories: [
        'Adult', 'Animation']
    },
    {
      link: 2653, name: 'Anime Action ', categories: [
        'Anime', 'Action']
    },
    {
      link: 9302, name: 'Anime Comedies ', categories: [
        'Anime', 'Comedies']
    },
    {
      link: 452, name: 'Anime Dramas ', categories: [
        'Anime', 'Dramas']
    },
    {
      link: 3063, name: 'Anime Features ', categories: [
        'Anime', 'Features']
    },
    {
      link: 2729, name: 'Anime Sci-Fi ', categories: [
        'Anime', 'Sci-Fi']
    },
    {
      link: 10695, name: 'Anime Horror ', categories: [
        'Anime', 'Horror']
    },
    {
      link: 11146, name: 'Anime Fantasy ', categories: [
        'Anime', 'Fantasy']
    },
    {
      link: 6721, name: 'Anime Series ', categories: [
        'Anime', 'Series']
    },
    {
      link: 783, name: 'Children & Family Movies ', categories: [
        'Children', 'Family', 'Movies']
    },
    {
      link: 6796, name: 'Movies for ages 0 to 2 ', categories: [
        'Movies', 'for', 'ages', '0', 'to', '2']
    },
    {
      link: 6218, name: 'Movies for ages 2 to 4 ', categories: [
        'Movies', 'for', 'ages', '2', 'to', '4']
    },
    {
      link: 5455, name: 'Movies for ages 5 to 7 ', categories: [
        'Movies', 'for', 'ages', '5', 'to', '7']
    },
    {
      link: 561, name: 'Movies for ages 8 to 10 ', categories: [
        'Movies', 'for', 'ages', '8', 'to', '10']
    },
    {
      link: 6962, name: 'Movies for ages 11 to 12 ', categories: [
        'Movies', 'for', 'ages', '11', 'to', '12']
    },
    {
      link: 10659, name: 'Education for Kids ', categories: [
        'Education', 'for', 'Kids']
    },
    {
      link: 67673, name: 'Disney ', categories: [
        'Disney']
    },
    {
      link: 10056, name: 'Movies based on children books ', categories: [
        'Movies', 'based', 'on', 'children', 'books']
    },
    {
      link: 51056, name: 'Family Features ', categories: [
        'Family', 'Features']
    },
    {
      link: 11177, name: 'TV Cartoons ', categories: [
        'TV', 'Cartoons']
    },
    {
      link: 27346, name: 'Kids TV ', categories: [
        'Kids', 'TV']
    },
    {
      link: 52843, name: 'Kids Music ', categories: [
        'Kids', 'Music']
    },
    {
      link: 5507, name: 'Animal Tales ', categories: [
        'Animal', 'Tales']
    },
    {
      link: 31574, name: 'Classic Movies ', categories: [
        'Classic', 'Movies']
    },
    {
      link: 31694, name: 'Classic Comedies ', categories: [
        'Classic', 'Comedies']
    },
    {
      link: 29809, name: 'Classic Dramas ', categories: [
        'Classic', 'Dramas']
    },
    {
      link: 47147, name: 'Classic Sci-Fi & Fantasy ', categories: [
        'Classic', 'Sci-Fi', 'Fantasy']
    },
    {
      link: 46588, name: 'Classic Thrillers ', categories: [
        'Classic', 'Thrillers']
    },
    {
      link: 7687, name: 'Film Noir ', categories: [
        'Film', 'Noir']
    },
    {
      link: 48744, name: 'Classic War Movies ', categories: [
        'Classic', 'War', 'Movies']
    },
    {
      link: 52858, name: 'Epics ', categories: [
        'Epics']
    },
    {
      link: 32473, name: 'Classic Foreign Movies ', categories: [
        'Classic', 'Foreign', 'Movies']
    },
    {
      link: 53310, name: 'Silent Movies ', categories: [
        'Silent', 'Movies']
    },
    {
      link: 47465, name: 'Classic Westerns ', categories: [
        'Classic', 'Westerns']
    },
    {
      link: 6548, name: 'Comedies ', categories: [
        'Comedies']
    },
    {
      link: 869, name: 'Dark Comedies ', categories: [
        'Dark', 'Comedies']
    },
    {
      link: 4426, name: 'Foreign Comedies ', categories: [
        'Foreign', 'Comedies']
    },
    {
      link: 1402, name: 'Late Night Comedies ', categories: [
        'Late', 'Night', 'Comedies']
    },
    {
      link: 26, name: 'Mockumentaries ', categories: [
        'Mockumentaries']
    },
    {
      link: 2700, name: 'Political Comedies ', categories: [
        'Political', 'Comedies']
    },
    {
      link: 9702, name: 'Screwball Comedies ', categories: [
        'Screwball', 'Comedies']
    },
    {
      link: 5286, name: 'Sports Comedies ', categories: [
        'Sports', 'Comedies']
    },
    {
      link: 11559, name: 'Stand-up Comedy ', categories: [
        'Stand-up', 'Comedy']
    },
    {
      link: 3519, name: 'Teen Comedies ', categories: [
        'Teen', 'Comedies']
    },
    {
      link: 4922, name: 'Satires ', categories: [
        'Satires']
    },
    {
      link: 5475, name: 'Romantic Comedies ', categories: [
        'Romantic', 'Comedies']
    },
    {
      link: 10256, name: 'Slapstick Comedies ', categories: [
        'Slapstick', 'Comedies']
    },
    {
      link: 7627, name: 'Cult Movies ', categories: [
        'Cult', 'Movies']
    },
    {
      link: 8195, name: 'B-Horror Movies ', categories: [
        'B-Horror', 'Movies']
    },
    {
      link: 1252, name: 'Campy Movies ', categories: [
        'Campy', 'Movies']
    },
    {
      link: 10944, name: 'Cult Horror Movies ', categories: [
        'Cult', 'Horror', 'Movies']
    },
    {
      link: 4734, name: 'Cult Sci-Fi & Fantasy ', categories: [
        'Cult', 'Sci-Fi', 'Fantasy']
    },
    {
      link: 9434, name: 'Cult Comedies ', categories: [
        'Cult', 'Comedies']
    },
    {
      link: 6839, name: 'Documentaries ', categories: [
        'Documentaries']
    },
    {
      link: 3652, name: 'Biographical Documentaries ', categories: [
        'Biographical', 'Documentaries']
    },
    {
      link: 9875, name: 'Crime Documentaries ', categories: [
        'Crime', 'Documentaries']
    },
    {
      link: 5161, name: 'Foreign Documentaries ', categories: [
        'Foreign', 'Documentaries']
    },
    {
      link: 5349, name: 'Historical Documentaries ', categories: [
        'Historical', 'Documentaries']
    },
    {
      link: 4006, name: 'Military Documentaries ', categories: [
        'Military', 'Documentaries']
    },
    {
      link: 180, name: 'Sports Documentaries ', categories: [
        'Sports', 'Documentaries']
    },
    {
      link: 90361, name: 'Music & Concert Documentaries ', categories: [
        'Music', 'Concert', 'Documentaries']
    },
    {
      link: 1159, name: 'Travel & Adventure Documentaries ', categories: [
        'Travel', 'Adventure', 'Documentaries']
    },
    {
      link: 7018, name: 'Political Documentaries ', categories: [
        'Political', 'Documentaries']
    },
    {
      link: 10005, name: 'Religious Documentaries ', categories: [
        'Religious', 'Documentaries']
    },
    {
      link: 2595, name: 'Science & Nature Documentaries ', categories: [
        'Science', 'Nature', 'Documentaries']
    },
    {
      link: 3675, name: 'Social & Cultural Documentaries ', categories: [
        'Social', 'Cultural', 'Documentaries']
    },
    {
      link: 5763, name: 'Dramas ', categories: [
        'Dramas']
    },
    {
      link: 3179, name: 'Biographical Dramas ', categories: [
        'Biographical', 'Dramas']
    },
    {
      link: 29809, name: 'Classic Dramas ', categories: [
        'Classic', 'Dramas']
    },
    {
      link: 528582748, name: 'Courtroom Dramas ', categories: [
        'Courtroom', 'Dramas']
    },
    {
      link: 6889, name: 'Crime Dramas ', categories: [
        'Crime', 'Dramas']
    },
    {
      link: 4961, name: 'Dramas based on Books ', categories: [
        'Dramas', 'based', 'on', 'Books']
    },
    {
      link: 3653, name: 'Dramas based on real life ', categories: [
        'Dramas', 'based', 'on', 'real', 'life']
    },
    {
      link: 6384, name: 'Tearjerkers ', categories: [
        'Tearjerkers']
    },
    {
      link: 2150, name: 'Foreign Dramas ', categories: [
        'Foreign', 'Dramas']
    },
    {
      link: 7243, name: 'Sports Dramas ', categories: [
        'Sports', 'Dramas']
    },
    {
      link: 500, name: 'Gay & Lesbian Dramas ', categories: [
        'Gay', 'Lesbian', 'Dramas']
    },
    {
      link: 384, name: 'Independent Dramas ', categories: [
        'Independent', 'Dramas']
    },
    {
      link: 9299, name: 'Teen Dramas ', categories: [
        'Teen', 'Dramas']
    },
    {
      link: 11, name: 'Military Dramas ', categories: [
        'Military', 'Dramas']
    },
    {
      link: 12123, name: 'Period Pieces ', categories: [
        'Period', 'Pieces']
    },
    {
      link: 6616, name: 'Political Dramas ', categories: [
        'Political', 'Dramas']
    },
    {
      link: 1255, name: 'Romantic Dramas ', categories: [
        'Romantic', 'Dramas']
    },
    {
      link: 5012, name: 'Showbiz Dramas ', categories: [
        'Showbiz', 'Dramas']
    },
    {
      link: 3947, name: 'Social Issue Dramas ', categories: [
        'Social', 'Issue', 'Dramas']
    },
    {
      link: 26835, name: 'Faith & Spirituality ', categories: [
        'Faith', 'Spirituality']
    },
    {
      link: 52804, name: 'Faith & Spirituality Movies ', categories: [
        'Faith', 'Spirituality', 'Movies']
    },
    {
      link: 2760, name: 'Spiritual Documentaries ', categories: [
        'Spiritual', 'Documentaries']
    },
    {
      link: 751423, name: 'Kids Faith & Spirituality ', categories: [
        'Kids', 'Faith', 'Spirituality']
    },
    {
      link: 7462, name: 'Foreign Movies ', categories: [
        'Foreign', 'Movies']
    },
    {
      link: 29764, name: 'Art House Movies ', categories: [
        'Art', 'House', 'Movies']
    },
    {
      link: 11828, name: 'Foreign Action & Adventure ', categories: [
        'Foreign', 'Action', 'Adventure']
    },
    {
      link: 32473, name: 'Classic Foreign Movies ', categories: [
        'Classic', 'Foreign', 'Movies']
    },
    {
      link: 4426, name: 'Foreign Comedies ', categories: [
        'Foreign', 'Comedies']
    },
    {
      link: 5161, name: 'Foreign Documentaries ', categories: [
        'Foreign', 'Documentaries']
    },
    {
      link: 2150, name: 'Foreign Dramas ', categories: [
        'Foreign', 'Dramas']
    },
    {
      link: 8243, name: 'Foreign Gay & Lesbian Movies ', categories: [
        'Foreign', 'Gay', 'Lesbian', 'Movies']
    },
    {
      link: 8654, name: 'Foreign Horror Movies ', categories: [
        'Foreign', 'Horror', 'Movies']
    },
    {
      link: 6485, name: 'Foreign Sci-Fi & Fantasy ', categories: [
        'Foreign', 'Sci-Fi', 'Fantasy']
    },
    {
      link: 10306, name: 'Foreign Thrillers ', categories: [
        'Foreign', 'Thrillers']
    },
    {
      link: 7153, name: 'Romantic Foreign Movies ', categories: [
        'Romantic', 'Foreign', 'Movies']
    },
    {
      link: 3761, name: 'African Movies ', categories: [
        'African', 'Movies']
    },
    {
      link: 5230, name: 'Australian Movies ', categories: [
        'Australian', 'Movies']
    },
    {
      link: 262, name: 'Belgian Movies ', categories: [
        'Belgian', 'Movies']
    },
    {
      link: 5685, name: 'Korean Movies ', categories: [
        'Korean', 'Movies']
    },
    {
      link: 1613, name: 'Latin American Movies ', categories: [
        'Latin', 'American', 'Movies']
    },
    {
      link: 5875, name: 'Middle Eastern Movies ', categories: [
        'Middle', 'Eastern', 'Movies']
    },
    {
      link: 63782, name: 'New Zealand Movies ', categories: [
        'New', 'Zealand', 'Movies']
    },
    {
      link: 11567, name: 'Russian ', categories: [
        'Russian']
    },
    {
      link: 9292, name: 'Scandinavian Movies ', categories: [
        'Scandinavian', 'Movies']
    },
    {
      link: 9196, name: 'Southeast Asian Movies ', categories: [
        'Southeast', 'Asian', 'Movies']
    },
    {
      link: 58741, name: 'Spanish Movies ', categories: [
        'Spanish', 'Movies']
    },
    {
      link: 61115, name: 'Greek Movies ', categories: [
        'Greek', 'Movies']
    },
    {
      link: 58886, name: 'German Movies ', categories: [
        'German', 'Movies']
    },
    {
      link: 58807, name: 'French Movies ', categories: [
        'French', 'Movies']
    },
    {
      link: 5254, name: 'Eastern European Movies ', categories: [
        'Eastern', 'European', 'Movies']
    },
    {
      link: 10606, name: 'Dutch Movies ', categories: [
        'Dutch', 'Movies']
    },
    {
      link: 58750, name: 'Irish Movies ', categories: [
        'Irish', 'Movies']
    },
    {
      link: 10398, name: 'Japanese Movies ', categories: [
        'Japanese', 'Movies']
    },
    {
      link: 8221, name: 'Italian Movies ', categories: [
        'Italian', 'Movies']
    },
    {
      link: 10463, name: 'Indian Movies ', categories: [
        'Indian', 'Movies']
    },
    {
      link: 3960, name: 'Chinese Movies ', categories: [
        'Chinese', 'Movies']
    },
    {
      link: 10757, name: 'British Movies ', categories: [
        'British', 'Movies']
    },
    {
      link: 5977, name: 'Gay & Lesbian Movies ', categories: [
        'Gay', 'Lesbian', 'Movies']
    },
    {
      link: 7120, name: 'Gay & Lesbian Comedies ', categories: [
        'Gay', 'Lesbian', 'Comedies']
    },
    {
      link: 500, name: 'Gay & Lesbian Dramas ', categories: [
        'Gay', 'Lesbian', 'Dramas']
    },
    {
      link: 3329, name: 'Romantic Gay & Lesbian Movies ', categories: [
        'Romantic', 'Gay', 'Lesbian', 'Movies']
    },
    {
      link: 8243, name: 'Foreign Gay & Lesbian Movies ', categories: [
        'Foreign', 'Gay', 'Lesbian', 'Movies']
    },
    {
      link: 4720, name: 'Gay & Lesbian Documentaries ', categories: [
        'Gay', 'Lesbian', 'Documentaries']
    },
    {
      link: 65263, name: 'Gay & Lesbian TV Shows ', categories: [
        'Gay', 'Lesbian', 'TV', 'Shows']
    },
    {
      link: 8711, name: 'Horror Movies ', categories: [
        'Horror', 'Movies']
    },
    {
      link: 8195, name: 'B-Horror Movies ', categories: [
        'B-Horror', 'Movies']
    },
    {
      link: 6895, name: 'Creature Features ', categories: [
        'Creature', 'Features']
    },
    {
      link: 10944, name: 'Cult Horror Movies ', categories: [
        'Cult', 'Horror', 'Movies']
    },
    {
      link: 45028, name: 'Deep Sea Horror Movies ', categories: [
        'Deep', 'Sea', 'Horror', 'Movies']
    },
    {
      link: 8654, name: 'Foreign Horror Movies ', categories: [
        'Foreign', 'Horror', 'Movies']
    },
    {
      link: 89585, name: 'Horror Comedy ', categories: [
        'Horror', 'Comedy']
    },
    {
      link: 947, name: 'Monster Movies ', categories: [
        'Monster', 'Movies']
    },
    {
      link: 8646, name: 'Slasher and Serial Killer Movies ', categories: [
        'Slasher', 'and', 'Serial', 'Killer', 'Movies']
    },
    {
      link: 42023, name: 'Supernatural Horror Movies ', categories: [
        'Supernatural', 'Horror', 'Movies']
    },
    {
      link: 52147, name: 'Teen Screams ', categories: [
        'Teen', 'Screams']
    },
    {
      link: 75804, name: 'Vampire Horror Movies ', categories: [
        'Vampire', 'Horror', 'Movies']
    },
    {
      link: 75930, name: 'Werewolf Horror Movies ', categories: [
        'Werewolf', 'Horror', 'Movies']
    },
    {
      link: 75405, name: 'Zombie Horror Movies ', categories: [
        'Zombie', 'Horror', 'Movies']
    },
    {
      link: 6998, name: 'Satanic Stories ', categories: [
        'Satanic', 'Stories']
    },
    {
      link: 7077, name: 'Independent Movies ', categories: [
        'Independent', 'Movies']
    },
    {
      link: 11079, name: 'Experimental Movies ', categories: [
        'Experimental', 'Movies']
    },
    {
      link: 11804, name: 'Independent Action & Adventure ', categories: [
        'Independent', 'Action', 'Adventure']
    },
    {
      link: 3269, name: 'Independent Thrillers ', categories: [
        'Independent', 'Thrillers']
    },
    {
      link: 9916, name: 'Romantic Independent Movies ', categories: [
        'Romantic', 'Independent', 'Movies']
    },
    {
      link: 4195, name: 'Independent Comedies ', categories: [
        'Independent', 'Comedies']
    },
    {
      link: 384, name: 'Independent Dramas ', categories: [
        'Independent', 'Dramas']
    },
    {
      link: 1701, name: 'Music ', categories: [
        'Music']
    },
    {
      link: 52843, name: 'Kids Music ', categories: [
        'Kids', 'Music']
    },
    {
      link: 1105, name: 'Country & Western/Folk ', categories: [
        'Country', 'Western/Folk']
    },
    {
      link: 10271, name: 'Jazz & Easy Listening ', categories: [
        'Jazz', 'Easy', 'Listening']
    },
    {
      link: 10741, name: 'Latin Music ', categories: [
        'Latin', 'Music']
    },
    {
      link: 9472, name: 'Urban & Dance Concerts ', categories: [
        'Urban', 'Dance', 'Concerts']
    },
    {
      link: 2856, name: 'World Music Concerts ', categories: [
        'World', 'Music', 'Concerts']
    },
    {
      link: 3278, name: 'Rock & Pop Concerts ', categories: [
        'Rock', 'Pop', 'Concerts']
    },
    {
      link: 13335, name: 'Musicals ', categories: [
        'Musicals']
    },
    {
      link: 32392, name: 'Classic Musicals ', categories: [
        'Classic', 'Musicals']
    },
    {
      link: 59433, name: 'Disney Musicals ', categories: [
        'Disney', 'Musicals']
    },
    {
      link: 13573, name: 'Showbiz Musicals ', categories: [
        'Showbiz', 'Musicals']
    },
    {
      link: 55774, name: 'Stage Musicals ', categories: [
        'Stage', 'Musicals']
    },
    {
      link: 8883, name: 'Romantic Movies ', categories: [
        'Romantic', 'Movies']
    },
    {
      link: 502675, name: 'Romantic Favorites ', categories: [
        'Romantic', 'Favorites']
    },
    {
      link: 36103, name: 'Quirky Romance ', categories: [
        'Quirky', 'Romance']
    },
    {
      link: 9916, name: 'Romantic Independent Movies ', categories: [
        'Romantic', 'Independent', 'Movies']
    },
    {
      link: 7153, name: 'Romantic Foreign Movies ', categories: [
        'Romantic', 'Foreign', 'Movies']
    },
    {
      link: 1255, name: 'Romantic Dramas ', categories: [
        'Romantic', 'Dramas']
    },
    {
      link: 35800, name: 'Steamy Romantic Movies ', categories: [
        'Steamy', 'Romantic', 'Movies']
    },
    {
      link: 31273, name: 'Classic Romantic Movies ', categories: [
        'Classic', 'Romantic', 'Movies']
    },
    {
      link: 5475, name: 'Romantic Comedies ', categories: [
        'Romantic', 'Comedies']
    },
    {
      link: 1492, name: 'Sci-Fi & Fantasy ', categories: [
        'Sci-Fi', 'Fantasy']
    },
    {
      link: 1568, name: 'Action Sci-Fi & Fantasy ', categories: [
        'Action', 'Sci-Fi', 'Fantasy']
    },
    {
      link: 3327, name: 'Alien Sci-Fi ', categories: [
        'Alien', 'Sci-Fi']
    },
    {
      link: 47147, name: 'Classic Sci-Fi & Fantasy ', categories: [
        'Classic', 'Sci-Fi', 'Fantasy']
    },
    {
      link: 4734, name: 'Cult Sci-Fi & Fantasy ', categories: [
        'Cult', 'Sci-Fi', 'Fantasy']
    },
    {
      link: 9744, name: 'Fantasy Movies ', categories: [
        'Fantasy', 'Movies']
    },
    {
      link: 6926, name: 'Sci-Fi Adventure ', categories: [
        'Sci-Fi', 'Adventure']
    },
    {
      link: 3916, name: 'Sci-Fi Dramas ', categories: [
        'Sci-Fi', 'Dramas']
    },
    {
      link: 1694, name: 'Sci-Fi Horror Movies ', categories: [
        'Sci-Fi', 'Horror', 'Movies']
    },
    {
      link: 11014, name: 'Sci-Fi Thrillers ', categories: [
        'Sci-Fi', 'Thrillers']
    },
    {
      link: 6485, name: 'Foreign Sci-Fi & Fantasy ', categories: [
        'Foreign', 'Sci-Fi', 'Fantasy']
    },
    {
      link: 4370, name: 'Sports Movies ', categories: [
        'Sports', 'Movies']
    },
    {
      link: 5286, name: 'Sports Comedies ', categories: [
        'Sports', 'Comedies']
    },
    {
      link: 180, name: 'Sports Documentaries ', categories: [
        'Sports', 'Documentaries']
    },
    {
      link: 7243, name: 'Sports Dramas ', categories: [
        'Sports', 'Dramas']
    },
    {
      link: 12339, name: 'Baseball Movies ', categories: [
        'Baseball', 'Movies']
    },
    {
      link: 12803, name: 'Football Movies ', categories: [
        'Football', 'Movies']
    },
    {
      link: 12443, name: 'Boxing Movies ', categories: [
        'Boxing', 'Movies']
    },
    {
      link: 12549, name: 'Soccer Movies ', categories: [
        'Soccer', 'Movies']
    },
    {
      link: 6695, name: 'Martial Arts, Boxing & Wrestling ', categories: [
        'Martial', 'Arts', 'Boxing', 'Wrestling']
    },
    {
      link: 12762, name: 'Basketball Movies ', categories: [
        'Basketball', 'Movies']
    },
    {
      link: 9327, name: 'Sports & Fitness ', categories: [
        'Sports', 'Fitness']
    },
    {
      link: 8933, name: 'Thrillers ', categories: [
        'Thrillers']
    },
    {
      link: 43048, name: 'Action Thrillers ', categories: [
        'Action', 'Thrillers']
    },
    {
      link: 46588, name: 'Classic Thrillers ', categories: [
        'Classic', 'Thrillers']
    },
    {
      link: 10499, name: 'Crime Thrillers ', categories: [
        'Crime', 'Thrillers']
    },
    {
      link: 10306, name: 'Foreign Thrillers ', categories: [
        'Foreign', 'Thrillers']
    },
    {
      link: 3269, name: 'Independent Thrillers ', categories: [
        'Independent', 'Thrillers']
    },
    {
      link: 31851, name: 'Gangster Movies ', categories: [
        'Gangster', 'Movies']
    },
    {
      link: 5505, name: 'Psychological Thrillers ', categories: [
        'Psychological', 'Thrillers']
    },
    {
      link: 10504, name: 'Political Thrillers ', categories: [
        'Political', 'Thrillers']
    },
    {
      link: 9994, name: 'Mysteries ', categories: [
        'Mysteries']
    },
    {
      link: 11014, name: 'Sci-Fi Thrillers ', categories: [
        'Sci-Fi', 'Thrillers']
    },
    {
      link: 9147, name: 'Spy Thrillers ', categories: [
        'Spy', 'Thrillers']
    },
    {
      link: 972, name: 'Steamy Thrillers ', categories: [
        'Steamy', 'Thrillers']
    },
    {
      link: 11140, name: 'Supernatural Thrillers ', categories: [
        'Supernatural', 'Thrillers']
    },
    {
      link: 83, name: 'TV Shows ', categories: [
        'TV', 'Shows']
    },
    {
      link: 52117, name: 'British TV Shows ', categories: [
        'British', 'TV', 'Shows']
    },
    {
      link: 46553, name: 'Classic TV Shows ', categories: [
        'Classic', 'TV', 'Shows']
    },
    {
      link: 26146, name: 'Crime TV Shows ', categories: [
        'Crime', 'TV', 'Shows']
    },
    {
      link: 74652, name: 'Cult TV Shows ', categories: [
        'Cult', 'TV', 'Shows']
    },
    {
      link: 72436, name: 'Food & Travel TV ', categories: [
        'Food', 'Travel', 'TV']
    },
    {
      link: 27346, name: 'Kids TV ', categories: [
        'Kids', 'TV']
    },
    {
      link: 67879, name: 'Korean TV Shows ', categories: [
        'Korean', 'TV', 'Shows']
    },
    {
      link: 4814, name: 'Miniseries ', categories: [
        'Miniseries']
    },
    {
      link: 25804, name: 'Military TV Shows ', categories: [
        'Military', 'TV', 'Shows']
    },
    {
      link: 52780, name: 'Science & Nature TV ', categories: [
        'Science', 'Nature', 'TV']
    },
    {
      link: 10673, name: 'TV Action & Adventure ', categories: [
        'TV', 'Action', 'Adventure']
    },
    {
      link: 10375, name: 'TV Comedies ', categories: [
        'TV', 'Comedies']
    },
    {
      link: 10105, name: 'TV Documentaries ', categories: [
        'TV', 'Documentaries']
    },
    {
      link: 11714, name: 'TV Dramas ', categories: [
        'TV', 'Dramas']
    },
    {
      link: 83059, name: 'TV Horror ', categories: [
        'TV', 'Horror']
    },
    {
      link: 4366, name: 'TV Mysteries ', categories: [
        'TV', 'Mysteries']
    },
    {
      link: 1372, name: 'TV Sci-Fi & Fantasy ', categories: [
        'TV', 'Sci-Fi', 'Fantasy']
    },
    {
      link: 9833, name: 'Reality TV ', categories: [
        'Reality', 'TV']
    },
    {
      link: 60951, name: 'Teen TV Shows ', categories: [
        'Teen', 'TV', 'Shows']
    }
  ];

  static readonly DISABLED_WORDS: Array<string> = [
    'and', 'for', 'to', 'on'
  ];

  static readonly NETFLIX_CATEGORY_PAGE: string = 'http://www.netflix.com/browse/genre/';
}
