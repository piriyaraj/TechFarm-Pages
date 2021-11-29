const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
var { initializeApp } = require('firebase/app');
var { getDatabase, get, ref, child, set, push, remove } = require('firebase/database');
// const serviceAccount = require('./path/to/key.json');
var lastchekedtable;
var waLinkKeys;
var titles = [0, 0];
var alllinkscheck = "-1";

var allTableName = ['18+ Adult', '8 Ball Pool', 'AAgroupsorDetail', 'AIIMS', 'APPSC', 'AUSTRALIA', 'Aaj Tak', 'Aaj Tak News', 'Active', 'Actors', 'Actress', 'Adityapatna', 'Advertisement', 'Aeronautical', 'Aerospace Engineering', 'Aesthetic', 'Affiliate Marketing', 'Afghan', 'Afghanistan', 'Agriculture', 'Aieee', 'Air Force', 'Air Hostess', 'Ajio deals', 'Akshay Kumar Fans', 'Albania', 'Algeria', 'Algeria Afrikaans Adult 18+ Hot', 'Algeria Afrikaans Art Design Photography', 'Algeria Afrikaans Auto Vehicle', 'Algeria Afrikaans Business Advertising Marketing', 'Algeria Afrikaans Sports Games', 'Algeria Arabic Adult 18+ Hot', 'Algeria Azerbaijani Adult 18+ Hot', 'Algeria Bangla Auto Vehicle', 'Algeria Basque Comedy Funny', 'Algeria English Art Design Photography', 'Algeria English Music Audio Songs', 'Algeria Indonesian Adult 18+ Hot', 'Algeria Norwegian Auto Vehicle', 'Alia Bhatt Fans', 'AllLinks', 'Allu Arjun Fans', 'Amapiano', 'Amazon Review', 'Ameesha patel fans', 'American', 'American Girls', 'Amit sadh fans', 'Amitabh Bachchan Fans', 'Among Us', 'Among us', 'Andhra Pradesh', 'Andorra', 'Angelina Jolie Fans', 'Angelina jolie fans', 'Angola', 'Animals and Pets', 'Animals and pets', 'Animation & VFX', 'Animation and VFX', 'Anime', 'Announcement', 'Anushka Sharma Fans', 'App Download', 'Apps', 'Apurva agnihotri fans', 'Arabic', 'Architecture', 'Argentina', 'Argentina Albanian Adult 18+ Hot', 'Argentina Albanian Art Design Photography', 'Argentina Albanian Film Animation', 'Argentina Amharic Gaming Apps', 'Argentina Arabic Adult 18+ Hot', 'Argentina Azerbaijani Business Advertising Marketing', 'Argentina Hindi Adult 18+ Hot', 'Arjun rampal fans', 'Arsenal', 'Arsikere', 'Art and Design', 'Asia', 'Astrology', 'Athletics', 'Athni', 'Aunty', 'Australia', 'Australia Afrikaans Adult 18+ Hot', 'Australia Amharic Gaming Apps', 'Australia Arabic Comedy Funny', 'Australia Arabic Money Earning', 'Australia Armenian Adult 18+ Hot', 'Australia Azerbaijani Money Earning', 'Australia Basque Business Advertising Marketing', 'Australia Chinese Adult 18+ Hot', 'Australia Czech Gaming Apps', 'Australia English Adult 18+ Hot', 'Australia English Business Advertising Marketing', 'Australia English Entertainment Masti', 'Australia English Family Relationships', 'Australia English Fan Club Celebrities', 'Australia English Fashion Style Clothing', 'Australia English Jobs Career', 'Australia English Science Technology', 'Australia Portuguese Adult 18+ Hot', 'Australia Urdu Adult 18+ Hot', 'Austria Afrikaans Dating Flirting Chatting', 'Austria Amharic Family Relationships', 'Austria Arabic Adult 18+ Hot', 'Austria Azerbaijani Adult 18+ Hot', 'Austria Azerbaijani Sports Games', 'Austria Bangla Adult 18+ Hot', 'Austria English Adult 18+ Hot', 'Austria English Business Advertising Marketing', 'Austria Hindi Dating Flirting Chatting', 'Austria Hindi Music Audio Songs', 'Austria Malayalam Auto Vehicle', 'Austria Sinhala Adult 18+ Hot', 'Auto Parts', 'Automation', 'Automobile', 'Autoscale', 'Azerbaijan Amharic Adult 18+ Hot', 'Azerbaijan Azerbaijani Auto Vehicle', 'Azerbaijan Sinhala Adult 18+ Hot', 'Azerbaijan Uzbek Adult 18+ Hot', 'BSC Nursing', 'Badami', 'Bagalkot', 'Bagepalli', 'Bahrain', 'Bahrain Arabic Adult 18+ Hot', 'Bahrain Basque Art Design Photography', 'Bahrain Bosnian Fashion Style Clothing', 'Bahrain English Adult 18+ Hot', 'Bahrain English Comedy Funny', 'Bahrain Gujarati Comedy Funny', 'Bahrain Hindi Jobs Career', 'Bahrain Indonesian Adult 18+ Hot', 'Bahrain Malayalam Business Advertising Marketing', 'Bahrain Urdu Auto Vehicle', 'Bahrain Urdu Education School', 'Bail hongal', 'Bangalore', 'Bangkok & Thailand', 'Bangladesh', 'Bangladesh Bangla Adult 18+ Hot', 'Bangladesh Bangla Art Design Photography', 'Bangladesh Bangla Business Advertising Marketing', 'Bangladesh Bangla Dating Flirting Chatting', 'Bangladesh Bangla Education School', 'Bangladesh Bangla Family Relationships', 'Bangladesh Bangla Money Earning', 'Bangladesh Basque Adult 18+ Hot', 'Bangladesh Belarusian Adult 18+ Hot', 'Bangladesh English Adult 18+ Hot', 'Bangladesh English Business Advertising Marketing', 'Bangladesh English Dating Flirting Chatting', 'Bangladesh English Travel Local Place', 'Bangladesh Hindi Adult 18+ Hot', 'Banking', 'Barcelona', 'Basketball', 'Basu chatterjee fans', 'Beautiful', 'Belarus Bangla Adult 18+ Hot', 'Belarus Basque Adult 18+ Hot', 'Belarus Bosnian Fashion Style Clothing', 'Belarus English Family Relationships', 'Belgium', 'Belgium Bosnian Adult 18+ Hot', 'Belur', 'Bengali', 'Best', 'Bhakti', 'Bhojpuri', 'Bhutan', 'Big Data', 'Bigg Boss', 'Bihar', 'Bikes', 'Billionaire', 'Biology', 'Biotechnology', 'Birthday Wishes', 'Blogger', 'Blood Donors', 'Bolivia Bangla Adult 18+ Hot', 'Bolivia Chinese Comedy Funny', 'Bolivia Spanish Adult 18+ Hot', 'Bollywood Celebrity', 'Bond girl fans', 'Bosnia and Herzegovina Afrikaans Education School', 'Boys', 'Brands', 'Brazil', 'Brazil Bangla Adult 18+ Hot', 'Brazil Chinese Music Audio Songs', 'Brazil English Adult 18+ Hot', 'Brazil English Dating Flirting Chatting', 'Brazil English Pets Animals Nature', 'Brazil Hindi Adult 18+ Hot', 'Brazil Portuguese Adult 18+ Hot', 'Brazil Portuguese Business Advertising Marketing', 'Brazil Portuguese Dating Flirting Chatting', 'Brazil Tamil Adult 18+ Hot', 'Bulgaria English Adult 18+ Hot', 'Bulgaria English Education School', 'Business', 'Buy and Sell', 'C and C++', 'CAT', 'CCNA', 'CCNP', 'CET', 'CID Fans', 'CTET', 'California', 'Canada', 'Canada Armenian Adult 18+ Hot', 'Canada Catalan Adult 18+ Hot', 'Canada English Adult 18+ Hot', 'Canada English Business Advertising Marketing', 'Canada English Comedy Funny', 'Canada English Dating Flirting Chatting', 'Canada English Education School', 'Cape Town', 'Cartoon', 'Celebrity Fan Clubs', 'Chat Room', 'Chaupal', 'Chelsea FC', 'Chemistry', 'Chennai', 'Chennai Item', 'Chile English Science Technology', 'China', 'China Arabic Comedy Funny', 'China Chinese Adult 18+ Hot', 'China Chinese Comedy Funny', 'China Chinese Shopping Buy Sell', 'China English Adult 18+ Hot', 'China English Business Advertising Marketing', 'China English Entertainment Masti', 'China English Gaming Apps', 'China English Shopping Buy Sell', 'China Marathi Adult 18+ Hot', 'Chintamani', 'Chitapur', 'Chitgoppa', 'Chitradurga', 'Chitrashi rawat fans', 'Civil Engineering', 'Clash Of Clans', 'Cloth', 'Clothing', 'Coin Master', 'College', 'Colombia', 'Colombia Basque Adult 18+ Hot', 'Colombia English Adult 18+ Hot', 'Colombia Spanish Comedy Funny', 'Colombia Spanish Dating Flirting Chatting', 'Comedy', 'Commercial', 'Community', 'Competitive Exams', 'Competitive Programming', 'Computer Programming', 'Computer Science', 'Computer science', 'Cooking', 'Corporate', 'Couples', 'Cricket', 'Croatia English Family Relationships', 'Croatia Hindi Adult 18+ Hot', 'Cryptocurrency', 'Current Affairs', 'Czechia Bangla Adult 18+ Hot', 'Czechia Czech Film Animation', 'DC Fans', 'DJ', 'Dainik Bhaskar', 'Dainik Jagran', 'Dance', 'Dargajogihalli', 'Data Science', 'Data science and machine learning', 'Dating', 'Davanagere', 'Deals & Offers', 'Debina bonnerjee fans', 'Deepshikha nagpal fans', 'Delhi', 'Delnaaz irani fans', 'Denmark Afrikaans Adult 18+ Hot', 'Denmark English Comedy Funny', 'Denmark Greek Adult 18+ Hot', 'Desi girls', 'Designers', 'Dhubr', 'Diana penty fans', 'Digital Marketing', 'Dish TV', 'Doctors', 'Dogs', 'Download', 'Drashti dhami fans', 'Dream11', 'Dubai', 'Durban', 'Duta', 'ECE', 'EDM', 'Eamcet', 'Earn Money', 'Economics', 'Education', 'Educational', 'Egypt', 'Egypt Afrikaans Education School', 'Egypt Arabic Adult 18+ Hot', 'Egypt Arabic Family Relationships', 'Egypt Arabic Travel Local Place', 'Egypt English Adult 18+ Hot', 'Egypt English Education School', 'Eldoret', 'Engineering', 'England', 'English Learning', 'English Speaking', 'Entertainment', 'Entrepreneurs', 'Ethiopia English Adult 18+ Hot', 'Ethiopia English Education School', 'Europe', 'Event', 'Express News', 'FIFA', 'Family', 'Famous', 'Fantasy Premier League', 'Farah khan fans', 'Farming', 'Fashion', 'Film City', 'Finland', 'Finland English Business Advertising Marketing', 'Finland English Education School', 'Fitness', 'Fiverr', 'Football', 'Foreigner', 'Forex Trading', 'France Arabic Adult 18+ Hot', 'France English Business Advertising Marketing', 'Free', 'Free Fire', 'Freelancer', 'French', 'Friends', 'Friendship', 'Funny', 'Funny SMS', 'Funny Telegram Group Links', 'Funny Video', 'GATE', 'GK', 'GRE Preparation', 'GST', 'Gadwa', 'Gaming', 'Gate', 'Gaurav gera fans', 'Gauri pradhan fans', 'Gauteng', 'Genuine', 'Geo News', 'Georgia English Health Beauty Fitness', 'Germany', 'Germany Arabic Adult 18+ Hot', 'Germany English Adult 18+ Hot', 'Germany English Business Advertising Marketing', 'Germany English Money Earning', 'Germany English Social Friendship Community', 'Germany German Adult 18+ Hot', 'Ghana', 'Ghana Arabic Comedy Funny', 'Ghana English Adult 18+ Hot', 'Ghana English Dating Flirting Chatting', 'Ghana English Education School', 'Ghana English Entertainment Masti', 'Ghana English Money Earning', 'Ghana English Social Friendship Community', 'Ghana English Sports Games', 'Ghana Marathi Music Audio Songs', 'Girls', 'Goa', 'Golf', 'Good', 'Google Pay', 'Govt Jobs', 'Greece Bangla Adult 18+ Hot', 'Greece Hindi Sports Games', 'Gujarati', 'Gulf Jobs', 'Gurdeep kohli fans', 'Gym', 'Harare', 'Haryana', 'Hasanpur', 'Hazel keech fans', 'Health', 'Herbal', 'High School', 'Himachal Pradesh', 'Hindi News', 'Hindu', 'Hip Hop', 'Hirekerur', 'Hiriyur', 'Hiten tejwani fans', 'Hole narsipur', 'Hollywood', 'Hong Kong English Adult 18+ Hot', 'Hong Kong Hindi Adult 18+ Hot', 'Hong Kong Indonesian Gaming Apps', 'Hospet', 'House wife', 'Housewife', 'How To Create', 'Hubli-dharwad', 'Hungary English Adult 18+ Hot', 'Hustlers', 'Hyderabad', 'IELTS', 'IIT', 'IPL', 'IQ Option', 'Iceland', 'Iceland Armenian Adult 18+ Hot', 'Import Export', 'Indeed', 'Indi', 'India Arabic Education School', 'India Bangla Adult 18+ Hot', 'India Bangla Art Design Photography', 'India Bangla Auto Vehicle', 'India Bangla Comedy Funny', 'India Bangla Education School', 'India Bangla Entertainment Masti', 'India Bangla Gaming Apps', 'India Bangla Money Earning', 'India Bangla Music Audio Songs', 'India Bangla Pets Animals Nature', 'India Bangla Spiritual Devotional', 'India Bangla Sports Games', 'India Basque Money Earning', 'India English Adult 18+ Hot', 'India English Art Design Photography', 'India English Auto Vehicle', 'India English Business Advertising Marketing', 'India English Comedy Funny', 'India English Dating Flirting Chatting', 'India English Education School', 'India English Entertainment Masti', 'India English Family Relationships', 'India English Fan Club Celebrities', 'India English Fashion Style Clothing', 'India English Film Animation', 'India English Food Drinks', 'India English Gaming Apps', 'India English Health Beauty Fitness', 'India English Jobs Career', 'India English Money Earning', 'India English Music Audio Songs', 'India English News Magazines Politics', 'India English Pets Animals Nature', 'India English Science Technology', 'India English Shopping Buy Sell', 'India English Social Friendship Community', 'India English Spiritual Devotional', 'India English Sports Games', 'India English Thoughts Quotes Jokes', 'India Estonian Adult 18+ Hot', 'India Gujarati Adult 18+ Hot', 'India Gujarati Art Design Photography', 'India Gujarati Auto Vehicle', 'India Gujarati Business Advertising Marketing', 'India Gujarati Education School', 'India Gujarati Family Relationships', 'India Gujarati Fashion Style Clothing', 'India Gujarati Film Animation', 'India Gujarati Gaming Apps', 'India Gujarati Jobs Career', 'India Gujarati Music Audio Songs', 'India Gujarati Shopping Buy Sell', 'India Hindi Adult 18+ Hot', 'India Hindi Art Design Photography', 'India Hindi Auto Vehicle', 'India Hindi Business Advertising Marketing', 'India Hindi Comedy Funny', 'India Hindi Dating Flirting Chatting', 'India Hindi Education School', 'India Hindi Entertainment Masti', 'India Hindi Family Relationships', 'India Hindi Fan Club Celebrities', 'India Hindi Fashion Style Clothing', 'India Hindi Film Animation', 'India Hindi Food Drinks', 'India Hindi Gaming Apps', 'India Hindi Health Beauty Fitness', 'India Hindi Jobs Career', 'India Hindi Money Earning', 'India Hindi Music Audio Songs', 'India Hindi News Magazines Politics', 'India Hindi Pets Animals Nature', 'India Hindi Roleplay Comics', 'India Hindi Science Technology', 'India Hindi Shopping Buy Sell', 'India Hindi Social Friendship Community', 'India Hindi Spiritual Devotional', 'India Hindi Sports Games', 'India Hindi Thoughts Quotes Jokes', 'India Hindi Travel Local Place', 'India Hungarian Adult 18+ Hot', 'India Hungarian Music Audio Songs', 'India Indonesian Adult 18+ Hot', 'India Kannada Adult 18+ Hot', 'India Kannada Business Advertising Marketing', 'India Kannada Comedy Funny', 'India Kannada Dating Flirting Chatting', 'India Kannada Education School', 'India Kannada Entertainment Masti', 'India Kannada Gaming Apps', 'India Kannada Sports Games', 'India Malayalam Adult 18+ Hot', 'India Malayalam Art Design Photography', 'India Malayalam Auto Vehicle', 'India Malayalam Business Advertising Marketing', 'India Malayalam Comedy Funny', 'India Malayalam Dating Flirting Chatting', 'India Malayalam Education School', 'India Malayalam Entertainment Masti', 'India Malayalam Family Relationships', 'India Malayalam Fan Club Celebrities', 'India Malayalam Fashion Style Clothing', 'India Malayalam Film Animation', 'India Malayalam Food Drinks', 'India Malayalam Gaming Apps', 'India Malayalam Health Beauty Fitness', 'India Malayalam Jobs Career', 'India Malayalam Money Earning', 'India Malayalam Music Audio Songs', 'India Malayalam Pets Animals Nature', 'India Malayalam Science Technology', 'India Malayalam Shopping Buy Sell', 'India Malayalam Social Friendship Community', 'India Malayalam Spiritual Devotional', 'India Malayalam Sports Games', 'India Malayalam Thoughts Quotes Jokes', 'India Malayalam Travel Local Place', 'India Marathi Adult 18+ Hot', 'India Marathi Art Design Photography', 'India Marathi Business Advertising Marketing', 'India Marathi Dating Flirting Chatting', 'India Marathi Education School', 'India Marathi Entertainment Masti', 'India Marathi Fashion Style Clothing', 'India Marathi Gaming Apps', 'India Marathi Jobs Career', 'India Marathi Money Earning', 'India Marathi News Magazines Politics', 'India Marathi Pets Animals Nature', 'India Marathi Shopping Buy Sell', 'India Marathi Social Friendship Community', 'India Marathi Spiritual Devotional', 'India Marathi Sports Games', 'India Marathi Thoughts Quotes Jokes', 'India Nepali Money Earning', 'India Punjabi Adult 18+ Hot', 'India Punjabi Business Advertising Marketing', 'India Punjabi Comedy Funny', 'India Punjabi Entertainment Masti', 'India Punjabi Family Relationships', 'India Punjabi Fan Club Celebrities', 'India Punjabi Gaming Apps', 'India Punjabi Jobs Career', 'India Punjabi Music Audio Songs', 'India Punjabi Science Technology', 'India Punjabi Social Friendship Community', 'India Punjabi Spiritual Devotional', 'India Punjabi Travel Local Place', 'India Sinhala Adult 18+ Hot', 'India Sinhala Education School', 'India Tamil Adult 18+ Hot', 'India Tamil Auto Vehicle', 'India Tamil Business Advertising Marketing', 'India Tamil Comedy Funny', 'India Tamil Dating Flirting Chatting', 'India Tamil Education School', 'India Tamil Entertainment Masti', 'India Tamil Family Relationships', 'India Tamil Fan Club Celebrities', 'India Tamil Fashion Style Clothing', 'India Tamil Film Animation', 'India Tamil Food Drinks', 'India Tamil Gaming Apps', 'India Tamil Health Beauty Fitness', 'India Tamil Jobs Career', 'India Tamil Money Earning', 'India Tamil Music Audio Songs', 'India Tamil News Magazines Politics', 'India Tamil Pets Animals Nature', 'India Tamil Science Technology', 'India Tamil Shopping Buy Sell', 'India Tamil Social Friendship Community', 'India Tamil Spiritual Devotional', 'India Tamil Sports Games', 'India Tamil Thoughts Quotes Jokes', 'India Telugu Adult 18+ Hot', 'India Telugu Business Advertising Marketing', 'India Telugu Dating Flirting Chatting', 'India Telugu Gaming Apps', 'India Telugu Health Beauty Fitness', 'India Telugu Money Earning', 'India Telugu News Magazines Politics', 'India Telugu Shopping Buy Sell', 'India Telugu Social Friendship Community', 'India Telugu Spiritual Devotional', 'India Telugu Sports Games', 'India Urdu Adult 18+ Hot', 'India Urdu Education School', 'India Urdu News Magazines Politics', 'India Urdu Social Friendship Community', 'India Urdu Spiritual Devotional', 'Indian', 'Indonesia', 'Indonesia Arabic Education School', 'Indonesia English Adult 18+ Hot', 'Indonesia English Dating Flirting Chatting', 'Indonesia English Education School', 'Indonesia English Film Animation', 'Indonesia English Gaming Apps', 'Indonesia English Music Audio Songs', 'Indonesia English Social Friendship Community', 'Indonesia Hindi Adult 18+ Hot', 'Indonesia Hindi Jobs Career', 'Indonesia Indonesian Adult 18+ Hot', 'Indonesia Indonesian Art Design Photography', 'Indonesia Indonesian Auto Vehicle', 'Indonesia Indonesian Business Advertising Marketing', 'Indonesia Indonesian Comedy Funny', 'Indonesia Indonesian Dating Flirting Chatting', 'Indonesia Indonesian Education School', 'Indonesia Indonesian Entertainment Masti', 'Indonesia Indonesian Family Relationships', 'Indonesia Indonesian Fan Club Celebrities', 'Indonesia Indonesian Film Animation', 'Indonesia Indonesian Gaming Apps', 'Indonesia Indonesian Money Earning', 'Indonesia Indonesian Music Audio Songs', 'Indonesia Indonesian News Magazines Politics', 'Indonesia Indonesian Pets Animals Nature', 'Indonesia Indonesian Shopping Buy Sell', 'Indonesia Indonesian Social Friendship Community', 'Indonesia Indonesian Sports Games', 'Indonesia Indonesian Thoughts Quotes Jokes', 'Indonesia Tamil Adult 18+ Hot', 'Instagram', 'International', 'Investors', 'Iraq Arabic Adult 18+ Hot', 'Iraq English Adult 18+ Hot', 'Ireland', 'Irfan pathan fans', 'Islamic', 'Israel Arabic Adult 18+ Hot', 'Israel Arabic Sports Games', 'Israel English Dating Flirting Chatting', 'Israel Hebrew Adult 18+ Hot', 'Italy', 'Italy English Education School', 'Italy Italian Education School', 'Italy Italian Film Animation', 'Italy Kazakh Money Earning', 'JEE', 'Jagalur', 'Jaipur', 'Jamaica English Adult 18+ Hot', 'Jamaica Japanese Adult 18+ Hot', 'Jamkhandi', 'Japan', 'Japan Arabic Education School', 'Japan English Adult 18+ Hot', 'Japan English Business Advertising Marketing', 'Japan English Family Relationships', 'Japan English Music Audio Songs', 'Japan Japanese Adult 18+ Hot', 'Japan Japanese Dating Flirting Chatting', 'Japan Japanese Music Audio Songs', 'Japan Russian Adult 18+ Hot', 'Japan Turkish Adult 18+ Hot', 'Jasprit bumrah fans', 'Java', 'Jharkhand', 'Jio Phone', 'Job', 'Job Alert', 'Jog falls', 'Join interior designer', 'Join nigeria', 'Join trend', 'Jokes', 'Jordan Turkish Adult 18+ Hot', 'Jordan Ukrainian Adult 18+ Hot', 'Juhi chawla fans', 'Justin Bieber Fans', 'Kadur', 'Kamal haasan fans', 'Kamalapuram', 'Kanika maheshwari fans', 'Kannada', 'Karachi', 'Karnataka', 'Kashmir', 'Kazakhstan Armenian Adult 18+ Hot', 'Kazakhstan Japanese Adult 18+ Hot', 'Kazakhstan Polish Adult 18+ Hot', 'Kazakhstan Turkish Adult 18+ Hot', 'Kazakhstan Urdu Family Relationships', 'Kazakhstan Uzbek Adult 18+ Hot', 'Kazakhstan Uzbek Family Relationships', 'Kazakhstan Uzbek Fan Club Celebrities', 'Keerti gaekwad kelkar fans', 'Kenya', 'Kenya English Adult 18+ Hot', 'Kenya English Dating Flirting Chatting', 'Kenya English Fan Club Celebrities', 'Kenya English Gaming Apps', 'Kenya English Music Audio Songs', 'Kenya Swahili Adult 18+ Hot', 'Kenya Swahili Comedy Funny', 'Kenya Uzbek Adult 18+ Hot', 'Kenya Uzbek Fan Club Celebrities', 'Kerala', 'Ketki dave fans', 'Kids', 'Knowledge', 'Kolkata', 'Konnur', 'Koppa', 'Koppal', 'Koratagere', 'Korean', 'Kotturu', 'Krishnarajanagara', 'Krishnarajasagara', 'Krishnarajpet', 'Kudchi', 'Kudligi', 'Kumta', 'Kundapura', 'Kundgol', 'Kunigal', 'Kunwar amar fans', 'Kurgunta', 'Kushtagi', 'Kuwait English Adult 18+ Hot', 'Kuwait English Education School', 'Kuwait Sinhala Dating Flirting Chatting', 'Kyra dutt fans', 'Ladies', 'Lahore', 'Lakshmeshwar', 'Latest finance', 'Latvia Lao Adult 18+ Hot', 'Lauren gottlieb fans', 'Lawyers', 'Lebanon Arabic Adult 18+ Hot', 'Lebanon Arabic Film Animation', 'Lebanon English Adult 18+ Hot', 'Leonardo dicaprio fans', 'Libya Arabic Adult 18+ Hot', 'Lic', 'Lifestyle', 'Lingsugur', 'Lionel Messi Fans', 'Liverpool FC', 'Local', 'Londa', 'London', 'Love and Romance', 'Ludo', 'Ludo King', 'Lyrics', 'MBA', 'MLM', 'MPL', 'MPPSC', 'Macedonia Macedonian Adult 18+ Hot', 'Macedonia Malayalam Business Advertising Marketing', 'Machine Learning', 'Maharashtra', 'Makrand deshpande fans', 'Malaika arora fans', 'Malayalam', 'Malaysia', 'Malaysia English Adult 18+ Hot', 'Malaysia English Comedy Funny', 'Malaysia English Gaming Apps', 'Malaysia English Shopping Buy Sell', 'Malaysia English Social Friendship Community', 'Malaysia Hindi Adult 18+ Hot', 'Malaysia Indonesian Comedy Funny', 'Malaysia Indonesian Education School', 'Malaysia Indonesian Entertainment Masti', 'Malaysia Indonesian Sports Games', 'Malaysia Malay Adult 18+ Hot', 'Malaysia Malay Art Design Photography', 'Malaysia Malay Business Advertising Marketing', 'Malaysia Malay Comedy Funny', 'Malaysia Malay Dating Flirting Chatting', 'Malaysia Malay Education School', 'Malaysia Malay Entertainment Masti', 'Malaysia Malay Family Relationships', 'Malaysia Malay Fan Club Celebrities', 'Malaysia Malay Gaming Apps', 'Malaysia Malay Music Audio Songs', 'Malaysia Malay Pets Animals Nature', 'Malaysia Malay Science Technology', 'Malaysia Malay Social Friendship Community', 'Malaysia Malay Spiritual Devotional', 'Malaysia Malay Sports Games', 'Malaysia Tamil Dating Flirting Chatting', 'Mallika sherawat fans', 'Manchester united fc', 'Mandi', 'Manini mishra fans', 'Marathi', 'Marriage', 'Marvel Fans', 'Marvel fans', 'Mathematics', 'Mawra hocane fans', 'Mba', 'Medical Students', 'Meditation', 'Meetings', 'Mehndi Design', 'Memes', 'Mexico', 'Mexico English Dating Flirting Chatting', 'Mexico English Science Technology', 'Mexico English Social Friendship Community', 'Mexico Spanish Adult 18+ Hot', 'Miami', 'Millionaire', 'Mini Militia', 'Mobile and Electronics', 'Modified Cars', 'Money Control', 'Moneycontrol', 'Monica bedi fans', 'Morocco Arabic Money Earning', 'Morocco English Adult 18+ Hot', 'Morocco English Education School', 'Morocco English Social Friendship Community', 'Morocco Gujarati Music Audio Songs', 'Motivational', 'Motu Patlu', 'Movies', 'Mozambique Portuguese Social Friendship Community', 'Mppsc', 'Mukul dev fans', 'Mumbai', 'Music', 'Music Makers', 'Mutual Funds', 'Mutual fund', 'My11circle', 'NEET UG', 'Nairobi', 'Naman shaw fans', 'Nandish sandhu fans', 'Narayanavanam', 'Narayani shastri fans', 'Naruto Fans', 'Navaratri', 'Navy', 'Nepal', 'Nepal Nepali Money Earning', 'Netherlands', 'Netherlands Dutch Gaming Apps', 'Netherlands Norwegian Adult 18+ Hot', 'New', 'New York', 'New Zealand English Adult 18+ Hot', 'New Zealand English Business Advertising Marketing', 'New Zealand English Comedy Funny', 'New Zealand English Dating Flirting Chatting', 'New Zealand Punjabi Education School', 'New dragon ball z', 'News', 'Newspaper', 'Nigeria Afrikaans Art Design Photography', 'Nigeria Arabic Education School', 'Nigeria English Adult 18+ Hot', 'Nigeria English Art Design Photography', 'Nigeria English Business Advertising Marketing', 'Nigeria English Dating Flirting Chatting', 'Nigeria English Education School', 'Nigeria English Film Animation', 'Nigeria English Money Earning', 'Nigeria English Science Technology', 'Nigeria English Shopping Buy Sell', 'Nigeria English Sports Games', 'Nigeria Marathi Comedy Funny', 'Non Profit', 'Nonveg', 'Norway', 'Norway English Dating Flirting Chatting', 'Nurses', 'Nursing', 'OLX', 'Odisha', 'Offers', 'Old Songs', 'Oman', 'Oman English Education School', 'Oman English Family Relationships', 'Online', 'Original', 'PC Gamers', 'PC Solution', 'PDF Books', 'PHYSICS', 'PNG', 'PPSSPP Games', 'PUBG', 'PUNE', 'Pakistan Afrikaans Art Design Photography', 'Pakistan Arabic Adult 18+ Hot', 'Pakistan Arabic Education School', 'Pakistan Armenian Adult 18+ Hot', 'Pakistan Basque Comedy Funny', 'Pakistan English Adult 18+ Hot', 'Pakistan English Art Design Photography', 'Pakistan English Auto Vehicle', 'Pakistan English Business Advertising Marketing', 'Pakistan English Comedy Funny', 'Pakistan English Dating Flirting Chatting', 'Pakistan English Education School', 'Pakistan English Entertainment Masti', 'Pakistan English Family Relationships', 'Pakistan English Fan Club Celebrities', 'Pakistan English Fashion Style Clothing', 'Pakistan English Food Drinks', 'Pakistan English Gaming Apps', 'Pakistan English Health Beauty Fitness', 'Pakistan English Jobs Career', 'Pakistan English Money Earning', 'Pakistan English Music Audio Songs', 'Pakistan English News Magazines Politics', 'Pakistan English Pets Animals Nature', 'Pakistan English Science Technology', 'Pakistan English Shopping Buy Sell', 'Pakistan English Social Friendship Community', 'Pakistan English Spiritual Devotional', 'Pakistan English Sports Games', 'Pakistan English Thoughts Quotes Jokes', 'Pakistan Hindi Adult 18+ Hot', 'Pakistan Hindi Entertainment Masti', 'Pakistan Hindi Fashion Style Clothing', 'Pakistan Hindi Gaming Apps', 'Pakistan Hindi Money Earning', 'Pakistan Hindi Shopping Buy Sell', 'Pakistan Persian Adult 18+ Hot', 'Pakistan Punjabi Adult 18+ Hot', 'Pakistan Punjabi Business Advertising Marketing', 'Pakistan Punjabi Comedy Funny', 'Pakistan Punjabi Family Relationships', 'Pakistan Punjabi Music Audio Songs', 'Pakistan Punjabi Social Friendship Community', 'Pakistan Urdu Adult 18+ Hot', 'Pakistan Urdu Art Design Photography', 'Pakistan Urdu Auto Vehicle', 'Pakistan Urdu Business Advertising Marketing', 'Pakistan Urdu Comedy Funny', 'Pakistan Urdu Dating Flirting Chatting', 'Pakistan Urdu Education School', 'Pakistan Urdu Entertainment Masti', 'Pakistan Urdu Family Relationships', 'Pakistan Urdu Fan Club Celebrities', 'Pakistan Urdu Fashion Style Clothing', 'Pakistan Urdu Film Animation', 'Pakistan Urdu Food Drinks', 'Pakistan Urdu Gaming Apps', 'Pakistan Urdu Health Beauty Fitness', 'Pakistan Urdu Jobs Career', 'Pakistan Urdu Money Earning', 'Pakistan Urdu Music Audio Songs', 'Pakistan Urdu News Magazines Politics', 'Pakistan Urdu Pets Animals Nature', 'Pakistan Urdu Science Technology', 'Pakistan Urdu Shopping Buy Sell', 'Pakistan Urdu Social Friendship Community', 'Pakistan Urdu Spiritual Devotional', 'Pakistan Urdu Sports Games', 'Pakistan Urdu Thoughts Quotes Jokes', 'Pakistan Urdu Travel Local Place', 'Pakistani', 'Parmeet sethi fans', 'Paytm', 'Personal', 'Peru', 'Philippines', 'Philippines English Adult 18+ Hot', 'Philippines English Business Advertising Marketing', 'Philippines Filipino Adult 18+ Hot', 'Photo Editing', 'Photography', 'Photoshop', 'Physics', 'Piano', 'PicsArt Editing', 'Pilots', 'Poetry', 'Pokemon Go', 'Poland', 'Poland Polish Education School', 'Police', 'Politics', 'Popular', 'Portugal', 'Portugal Portuguese Adult 18+ Hot', 'Prabhas Fans', 'Preeti jhangiani fans', 'Preschool', 'Priya anand fans', 'Pro Kabaddi', 'Psychology students', 'Public', 'Puerto Rico English Adult 18+ Hot', 'Puerto Rico Urdu Adult 18+ Hot', 'Pune', 'Punjabi', 'Python', 'Qatar', 'Qatar English Adult 18+ Hot', 'Qatar English Fan Club Celebrities', 'Qawwali', 'Quiz', 'Quotes', 'RSS', 'Radhika madan fans', 'Ragini khanna fans', 'Rajasthan', 'Rajeev paul fans', 'Rajeshwari sachdev fans', 'Rajkummar rao fans', 'Rampur', 'Random', 'Rap Battles', 'Rappers', 'Raqesh bapat fans', 'Rashami desai fans', 'Ravi dubey fans', 'Real', 'Real Estate', 'Real estate', 'Real madrid', 'Religion', 'Reseller', 'Ridhi dogra fans', 'Ringtones', 'Rishta', 'Rohit roy fans', 'Romania Romanian Comedy Funny', 'Romania Romanian Social Friendship Community', 'Royal challengers bangalore(rcb) fans', 'Rrb', 'Rummy', 'Rural', 'Russia Indonesian Adult 18+ Hot', 'Russia Serbian Adult 18+ Hot', 'Russian', 'SEO', 'SHORT FILMMAKERS', 'SSC', 'Sahid kapoor fans', 'Salman Khan Fans', 'Sana saeed fans', 'Sanjay dutt fans', 'Saree Manufacturer', 'Sargun mehta fans', 'Sarkari Naukri', 'Sarkari Result', 'Saudi Arabia Arabic Adult 18+ Hot', 'Saudi Arabia Arabic Spiritual Devotional', 'Saudi Arabia Malayalam Fashion Style Clothing', 'Science', 'ScrapData', 'Search', 'Shabir ahluwalia fans', 'Shahpur', 'Shakti anand fans', 'Shalomsparkles clothing store', 'Shankar ehsaan loy fans', 'Sharad kelkar fans', 'Share Market', 'Shayari', 'Shopping', 'Shweta tiwari fans', 'Singapore', 'Singapore English Adult 18+ Hot', 'Singapore English Business Advertising Marketing', 'Singapore Malay Adult 18+ Hot', 'Singapore Tamil Money Earning', 'Sneha ullal fans', 'Soccer', 'Social Media', 'Sonipat', 'South Africa', 'South Africa Afrikaans Adult 18+ Hot', 'South Africa English Adult 18+ Hot', 'South Africa English Business Advertising Marketing', 'South Africa English Education School', 'South Africa English Entertainment Masti', 'South Africa English Film Animation', 'South Africa English Gaming Apps', 'South Africa English Health Beauty Fitness', 'South Africa English Sports Games', 'South Africa Zulu Adult 18+ Hot', 'South Korea Armenian Family Relationships', 'South Korea English Adult 18+ Hot', 'South Korea English Business Advertising Marketing', 'South Korea English Comedy Funny', 'South Korea English Fan Club Celebrities', 'South Korea English Music Audio Songs', 'South Korea Korean Social Friendship Community', 'Soweto', 'Spain English Adult 18+ Hot', 'Spain Spanish Business Advertising Marketing', 'Spanish', 'Spiritual', 'Sports', 'Sri Lanka', 'Sri Lanka Afrikaans Comedy Funny', 'Sri Lanka Afrikaans Sports Games', 'Sri Lanka Arabic Adult 18+ Hot', 'Sri Lanka Arabic Education School', 'Sri Lanka Arabic Sports Games', 'Sri Lanka Armenian Dating Flirting Chatting', 'Sri Lanka Bangla Business Advertising Marketing', 'Sri Lanka English Adult 18+ Hot', 'Sri Lanka English Auto Vehicle', 'Sri Lanka English Business Advertising Marketing', 'Sri Lanka English Comedy Funny', 'Sri Lanka English Dating Flirting Chatting', 'Sri Lanka English Education School', 'Sri Lanka English Entertainment Masti', 'Sri Lanka English Fashion Style Clothing', 'Sri Lanka English Film Animation', 'Sri Lanka English Gaming Apps', 'Sri Lanka English Health Beauty Fitness', 'Sri Lanka English Jobs Career', 'Sri Lanka English Money Earning', 'Sri Lanka English Music Audio Songs', 'Sri Lanka English News Magazines Politics', 'Sri Lanka English Science Technology', 'Sri Lanka English Shopping Buy Sell', 'Sri Lanka English Social Friendship Community', 'Sri Lanka English Sports Games', 'Sri Lanka English Travel Local Place', 'Sri Lanka Japanese Adult 18+ Hot', 'Sri Lanka Sinhala Adult 18+ Hot', 'Sri Lanka Sinhala Art Design Photography', 'Sri Lanka Sinhala Auto Vehicle', 'Sri Lanka Sinhala Business Advertising Marketing', 'Sri Lanka Sinhala Comedy Funny', 'Sri Lanka Sinhala Dating Flirting Chatting', 'Sri Lanka Sinhala Education School', 'Sri Lanka Sinhala Entertainment Masti', 'Sri Lanka Sinhala Family Relationships', 'Sri Lanka Sinhala Fan Club Celebrities', 'Sri Lanka Sinhala Fashion Style Clothing', 'Sri Lanka Sinhala Film Animation', 'Sri Lanka Sinhala Food Drinks', 'Sri Lanka Sinhala Gaming Apps', 'Sri Lanka Sinhala Health Beauty Fitness', 'Sri Lanka Sinhala Jobs Career', 'Sri Lanka Sinhala Money Earning', 'Sri Lanka Sinhala Music Audio Songs', 'Sri Lanka Sinhala News Magazines Politics', 'Sri Lanka Sinhala Pets Animals Nature', 'Sri Lanka Sinhala Science Technology', 'Sri Lanka Sinhala Shopping Buy Sell', 'Sri Lanka Sinhala Social Friendship Community', 'Sri Lanka Sinhala Spiritual Devotional', 'Sri Lanka Sinhala Sports Games', 'Sri Lanka Sinhala Thoughts Quotes Jokes', 'Sri Lanka Sinhala Travel Local Place', 'Sri Lanka Tamil Adult 18+ Hot', 'Sri Lanka Tamil Business Advertising Marketing', 'Sri Lanka Tamil Comedy Funny', 'Sri Lanka Tamil Education School', 'Sri Lanka Tamil Family Relationships', 'Sri Lanka Tamil Film Animation', 'Sri Lanka Tamil Gaming Apps', 'Sri Lanka Tamil Jobs Career', 'Sri Lanka Tamil Money Earning', 'Sri Lanka Tamil Music Audio Songs', 'Sri Lanka Tamil News Magazines Politics', 'Sri Lanka Tamil Pets Animals Nature', 'Sri Lanka Tamil Shopping Buy Sell', 'Sri Lanka Tamil Sports Games', 'Sri lanka', 'Startup', 'Status', 'Stock Market', 'Students', 'Study', 'Sub4Sub', 'Switzerland', 'Switzerland Swedish Adult 18+ Hot', 'TNPSC', 'TNUSRB', 'TV Shows', 'Taiwan Tamil Adult 18+ Hot', 'Tamil', 'Tamil Actress', 'Tamil Aunty', 'Tamil Comedy', 'Tamil Item', 'Tamil Nadu', 'Tamil News', 'Tamil News Paper', 'Tamil news', 'Tanzania', 'Tanzania Afrikaans Adult 18+ Hot', 'Tanzania Swahili Adult 18+ Hot', 'Tanzania Swahili Business Advertising Marketing', 'Tanzania Swahili Comedy Funny', 'Tanzania Swahili Dating Flirting Chatting', 'Tanzania Swahili Money Earning', 'Tanzania Swahili Music Audio Songs', 'Tanzania Swahili Sports Games', 'Tax Consultant', 'Teachers', 'Technical', 'Technical Reviews', 'Technology', 'Telangana', 'Telegu', 'Telugu', 'Telugu girls', 'Tembisa', 'Teriya magar fans', 'Thailand', 'Thailand English Social Friendship Community', 'Thailand Thai Adult 18+ Hot', 'Thrissur', 'Tibet', 'Tik Tok', 'TikTok', 'Tiktok', 'Tiktok vs youtuber fans', 'Tiruppur', 'Togo English Music Audio Songs', 'Tollywood', 'Tom and Jerry', 'Tourism', 'Trading', 'Trance Music', 'Trance music', 'Travel', 'Tupac Fans', 'Turkey Arabic Adult 18+ Hot', 'Turkey Arabic News Magazines Politics', 'Turkey English Adult 18+ Hot', 'Turkey Turkish Adult 18+ Hot', 'Turkey Turkish Entertainment Masti', 'Turkish', 'Twitch', 'UGC NET', 'UK', 'UPSC', 'USA', 'Uganda', 'Uganda English Adult 18+ Hot', 'Uganda English Art Design Photography', 'Uganda English Business Advertising Marketing', 'Uganda English Dating Flirting Chatting', 'Uganda English Family Relationships', 'Uganda English Spiritual Devotional', 'Uganda English Sports Games', 'Una', 'Unacademy', 'United Arab Emirates Arabic Adult 18+ Hot', 'United Arab Emirates Arabic Social Friendship Community', 'United Arab Emirates English Business Advertising Marketing', 'United Arab Emirates English Dating Flirting Chatting', 'United Arab Emirates English Sports Games', 'United Arab Emirates Hindi Adult 18+ Hot', 'United Arab Emirates Malayalam Adult 18+ Hot', 'United Arab Emirates Malayalam Fashion Style Clothing', 'United Arab Emirates Malayalam Music Audio Songs', 'United Arab Emirates Malayalam Pets Animals Nature', 'United Arab Emirates Urdu Music Audio Songs', 'United Arab Emirates Zulu Science Technology', 'United Kingdom English Adult 18+ Hot', 'United Kingdom English Business Advertising Marketing', 'United Kingdom English Dating Flirting Chatting', 'United Kingdom English Education School', 'United Kingdom English Entertainment Masti', 'United Kingdom English Fan Club Celebrities', 'United Kingdom English Gaming Apps', 'United Kingdom English Health Beauty Fitness', 'United Kingdom English Money Earning', 'United Kingdom English Music Audio Songs', 'United Kingdom English Social Friendship Community', 'United Kingdom English Spiritual Devotional', 'United Kingdom Sinhala Adult 18+ Hot', 'United Kingdom Telugu Adult 18+ Hot', 'United States Armenian Education School', 'United States English Adult 18+ Hot', 'United States English Art Design Photography', 'United States English Business Advertising Marketing', 'United States English Dating Flirting Chatting', 'United States English Education School', 'United States English Fan Club Celebrities', 'United States English Gaming Apps', 'United States English Health Beauty Fitness', 'United States English Jobs Career', 'United States English Money Earning', 'United States English Music Audio Songs', 'United States English Science Technology', 'United States English Shopping Buy Sell', 'United States English Social Friendship Community', 'United States Indonesian Sports Games', 'United States Kannada Adult 18+ Hot', 'United States Sinhala Social Friendship Community', 'United States Spanish Money Earning', 'United States Tamil Health Beauty Fitness', 'United States Telugu Adult 18+ Hot', 'United States Urdu Adult 18+ Hot', 'United States Urdu Education School', 'United States Urdu Gaming Apps', 'Unlimited', 'Urdu Poetry', 'Urdu poetry', 'Uttarakhand', 'Varun badola fans', 'Vatican city', 'Venezuela Vietnamese Adult 18+ Hot', 'Video chat', 'Vijay Fans', 'Vineet raina fans', 'Virat Kohli Fans', 'WWE', 'Wallpapers', 'Web Developer', 'West Bengal', 'West bengal', 'WhatsApp Group Join Links', 'WhatsApp Group Link App', 'WhatsApp Group Link Kerala', 'WhatsApp Group Links Indian 2018', 'WhatsApp Group links America', 'Wholesale', 'Workshop', 'Yana gupta fans', 'Yemen Arabic Adult 18+ Hot', 'Yemen English Adult 18+ Hot', 'Yo yo honey singh', 'Yoga', 'YouTube', 'Youth', 'Youtuber', 'Zambia', 'Zayed khan fans', 'Zee News', 'Zee news', 'Zerodha', 'Zimbabwe', 'Zimbabwe English Adult 18+ Hot', 'Zimbabwe English Spiritual Devotional', 'Zimbabwe English Sports Games', 'Zimbabwe Zulu Science Technology', 'forex investor', 'free fire redeem code', 'girls chat', 'kannada girls', 'kinnar', 'randi', 'school girls', 'single girls', 'tamil item girls'];
var groupData;
const firebaseConfig = {
    apiKey: "AIzaSyCS4okSW3m4HAjyrUyuzTTVSIp7w4INCMU",
    authDomain: "smart-shopping-cart-ssc.firebaseapp.com",
    databaseURL: "https://smart-shopping-cart-ssc-default-rtdb.firebaseio.com",
    projectId: "smart-shopping-cart-ssc",
    storageBucket: "smart-shopping-cart-ssc.appspot.com",
    messagingSenderId: "160224436712",
    appId: "1:160224436712:web:fd9c34e6c8467a34a3845d"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// constants
// databaseUrl = "https://whatsapp-group-linker-default-rtdb.firebaseio.com/"

// get lastcrwel
var lastPostUrl;
const lastCrewel = async () => {
    await get(child(starCountRef, `/AAgroupsorDetail`)).then((snapshot) => {
        if (snapshot.exists()) {
            lastPostUrl = snapshot.val()['lastpost'];
        } else {
            console.log("No data available");
            lastPostUrl = -1;

        }
    }).catch((error) => {
        lastPostUrl = -1;
        console.error(error);
    });
}

// set sitemap and last post link that added in firebase
const updateLastCrewel = async (lastPostLink) => {
    // console.log(lastPostLink);
    await set(ref(db, 'AAgroupsorDetail/'), { lastpost: lastPostLink })

}

// get post links
const getPostLinks = async (sitemapUrl) => {
    try {
        // console.log(url);
        const response = await axios.get(sitemapUrl);

        const html = response.data;
        const regex = /https:(.|\n)*?\s/mg;
        const found = html.match(regex);


        return found;
    } catch (error) {
        throw error;
    }
};

//upload whatsapp link into firebase
const uploadWaLink = async (tableName, data) => {
    const db = getDatabase();
    const newPostKey = await push(child(ref(db), tableName)).key;
    await set(ref(db, tableName + "/" + newPostKey), data)
}

// take single post category, country, language and groupkey
const getDataFromPost = async (postUrl) => {
    try {
        // console.log(url);
        const response = await axios.get(postUrl);

        const html = response.data;
        const $ = cheerio.load(html);
        tagList = []
        $('.cate').each((_idx, el) => {
            const title = $(el).text()
            if (_idx < 3) {
                tagList.push(title);
            }
        });

        tagList.push(postUrl.split("invite/")[1])
        return tagList;
    } catch (error) {
        throw error;
    }
};

// check whatsapp group link
const check = async (url) => {
    try {
        // console.log(url);
        const response = await axios.get(url);

        const html = response.data;

        const $ = cheerio.load(html);

        const titles = [];

        $('h2').each((_idx, el) => {
            const title = $(el).text()
            titles.push(title)
        });

        return titles;
    } catch (error) {
        throw error;
    }
};


// arrage posts
const addLink = async (i, toPost) => {
    var dataList = await getDataFromPost(i);
    var category = dataList[0];
    var country = dataList[1];
    var language = dataList[2];
    var groupkey = dataList[3];
    var tableName = country + " " + language + " " + category.split("/").join(' ');
    await check("https://chat.whatsapp.com/invite/" + groupkey)
        .then((groupNames) => {
            var groupName = groupNames[0];
            if (groupName == 0) {
                console.log(toPost.indexOf(i + " ") + 1, '/', toPost.length, '>>', tableName, '>>', "Link Invalid")

                return 0;
            }
            var data = {
                "groupLink": groupkey,
                "groupName": groupName,
            }
            // console.log(data);
            console.log(toPost.indexOf(i + " ") + 1, '/', toPost.length, '>>', tableName, '>>', groupName)
            uploadWaLink(tableName, data);
            insertData("AllLinks/" + groupkey, tableName, format = "patch")
            if (tableName.match("Hot") == null) {
                var data1 = {
                    "groupLink": groupkey,
                    "groupName": groupName,
                    "groupCategory": tableName,
                }
                uploadWaLink("latestUpdates", data1);
            }
            if (toPost.indexOf(i + " ") == 0) {
                // console.log(i);
                lastPost = i;
                updateLastCrewel(i);
            }
            return 1
        })

}

const getalllinkscheck = async (waid) => {
    starCountRef = await ref(db, '/');
    await get(child(starCountRef, "/AllLinks/" + waid)).then((snapshot) => {
        if (snapshot.exists()) {
            alllinkscheck = 1;
        } else {
            alllinkscheck = 0;
            // console.log("No data available");
        }
    }).catch((error) => {
        console.error(error);
    });
}
// const presenceRef = ref(db, "disconnectmessage");
// Write a string when this client loses connection
const singleGroup = async (path) => {
    starCountRef = await ref(db, '/');
    await get(child(starCountRef, path)).then((snapshot) => {
        if (snapshot.exists()) {
            groupData = [];
            snapshot.forEach(childSnapshot => {
                // allTableName.push(childSnapshot.key)
                groupData.push(childSnapshot.val());
            })
            // lastPostUrl = snapshot.val()['lastchekedtable'];
        } else {
            console.log("No data available");
            lastPostUrl = -1;

        }
    }).catch((error) => {
        lastPostUrl = -1;
        console.error(error);
    });
}
const getallTableName = async () => {
    starCountRef = await ref(db, '/');
    await get(child(starCountRef, "/")).then((snapshot) => {
        if (snapshot.exists()) {
            allTableName = [];
            snapshot.forEach(childSnapshot => {
                allTableName.push(childSnapshot.key)
            })
            // lastPostUrl = snapshot.val()['lastchekedtable'];
        } else {
            console.log("No data available");
            lastPostUrl = -1;

        }
    }).catch((error) => {
        lastPostUrl = -1;
        console.error(error);
    });
}
const getWaLinkKey = async (tableName) => {
    starCountRef = await ref(db, '/');
    await get(child(starCountRef, tableName)).then((snapshot) => {
        if (snapshot.exists()) {
            waLinkKeys = [];
            snapshot.forEach(childSnapshot => {
                waLinkKeys.push(childSnapshot.key)
            })
            // lastPostUrl = snapshot.val()['lastchekedtable'];
        } else {
            console.log("No data available");
            lastPostUrl = -1;

        }
    }).catch((error) => {
        lastPostUrl = -1;
        console.error(error);
    });
}
const getLastCrewl = async () => {
    starCountRef = await ref(db, '/');
    await get(child(starCountRef, "/ScrapData")).then((snapshot) => {
        if (snapshot.exists()) {
            // console.log(snapshot.val());
            lastchekedtable = snapshot.val()['lastchekedtable'];
        } else {
            console.log("No data available");
            waLinkKeys = [];

        }
    }).catch((error) => {
        waLinkKeys = [];
        console.error(error);
    });
}

// deleteTabledata
const deleteTabelData = async (path) => {
    await remove(ref(db, path));
}
// deleteTabelData();
// insert data into firbase
// tableName, data, format = "post"
function insertData(tableName, data, format = "post") {
    var tableref = ref(db, tableName);
    if (format == "patch") {
        set(tableref, data);
        // child("waLink").set("table")
    } else {
        push(tableref, data);
    }
}



// control all functions
const mainInvalid = async () => {
    titles = [0, 0];
    // await getWaLinkKey('testing');
    await getLastCrewl();
    // console.log(lastchekedtable);
    // console.log(allTableName.length);
    for (var i = lastchekedtable; i < allTableName.length; i++) {
        // console.log(allTableName[i]);
        if (i == allTableName.length - 1) {
            await insertData("ScrapData/lastchekedtable", 0, format = "patch");
        } else {
            await insertData("ScrapData/lastchekedtable", i, format = "patch");
        }
        if (allTableName[i] == "ScrapData" | allTableName[i] == "AAgroupsorDetail" | allTableName[i] == "AllLinks") {
            continue;
        }
        if (titles[0] == -1) {
            // await insertData("scrapData", { lastchekedtable: i }, format = "post")
            break;
        }
        console.log(i, "/", allTableName.length, "===>", allTableName[i]);
        await getWaLinkKey(allTableName[i]);
        for (var j = 0; j < waLinkKeys.length; j++) {
            await singleGroup(allTableName[i] + "/" + waLinkKeys[j]);
            var titles = await check("https://chat.whatsapp.com/" + groupData[0]);
            if (titles[0] == -1) {
                await insertData("ScrapData/lastchekedtable", i, format = "patch");
                break;
            }
            if (titles[0] == "") {
                await deleteTabelData(allTableName[i] + "/" + waLinkKeys[j])
                await deleteTabelData("AllLinks/" + groupData[0]);
                console.log("=====>", groupData[0], "Invalid", groupData[1], j, '/', waLinkKeys.length);
                break;
            } else {
                await getalllinkscheck(groupData[0]);
                if (alllinkscheck == 0) {
                    var waid = groupData[0];
                    insertData("AllLinks/" + waid, allTableName[i], format = "patch")
                    alllinkscheck = -1;
                }
                // console.log("=====>", groupData[0], "Valid", groupData[1], j, '/', waLinkKeys.length);
            }
        }
    }
}
var starCountRef;
const mainExtract = async () => {
    starCountRef = await ref(db, '/');
    // var lastPost =await lastCrewel();
    await lastCrewel();
    if (lastPostUrl == -1) {
        return 0;
    }
    var lastPost = lastPostUrl + " ";
    // console.log(lastPost);
    var postLinks = await getPostLinks("https://groupsor.link/seo/sitemap.xml");
    var index = postLinks.indexOf(lastPost);

    if (index == -1) {
        index = postLinks.length;
    }
    if (index == 1) {
        console.log("No new post");
        // process.exit();
    }
    // console.log(index);
    var toPost = postLinks.slice(1, index);
    for (var a = 0; a < toPost.length; a++) {
        var postLink = toPost[a].replace(" ", "");
        var status = await addLink(postLink, toPost)
        if (status == -1) {
            break
        }
        if (a == toPost.length - 1) {
            // process.exit();
        }
    }
}

const test = async () => {
    lastCrewel()
        .then((result) => {
            console.log(result);
        })

}
// mainInvalid();

module.exports.extractGroupsor = mainExtract;
module.exports.invalidChecker = mainInvalid;