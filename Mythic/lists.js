let randomEventFocus =
[
    [1, "Remote Event"],
    [6, "Ambiguous Event"],
    [11, "New NPC"],
    [21, "NPC Action"],
    [41, "NPC Negative"],
    [46, "NPC Positive"],
    [51, "Move Toward A Thread"],
    [56, "Move Away From A Thread"],
    [66, "Close A Thread"],
    [71, "PC Negative"],
    [81, "PC Positive"],
    [86, "Current Context"],
];

let eventActions1 = [
    "Abandon", 
    "Accompany", 
    "Activate", 
    "Agree", 
    "Ambush", 
    "Arrive", 
    "Assist", 
    "Attack", 
    "Attain", 
    "Bargain", 
    "Befriend", 
    "Bestow", 
    "Betray", 
    "Block", 
    "Break", 
    "Carry", 
    "Celebrate", 
    "Change", 
    "Close", 
    "Combine", 
    "Communicate", 
    "Conceal", 
    "Continue", 
    "Control", 
    "Create", 
    "Deceive", 
    "Decrease", 
    "Defend", 
    "Delay", 
    "Deny", 
    "Depart", 
    "Deposit", 
    "Destroy", 
    "Dispute", 
    "Disrupt", 
    "Distrust", 
    "Divide", 
    "Drop", 
    "Easy", 
    "Energize", 
    "Escape", 
    "Expose", 
    "Fail", 
    "Fight", 
    "Flee", 
    "Free", 
    "Guide", 
    "Harm", 
    "Heal", 
    "Hinder", 
    "Imitate", 
    "Imprison", 
    "Increase", 
    "Indulge", 
    "Inform", 
    "Inquire", 
    "Inspect", 
    "Invade", 
    "Leave", 
    "Lure", 
    "Misuse", 
    "Move", 
    "Neglect", 
    "Observe", 
    "Open", 
    "Oppose", 
    "Overthrow", 
    "Praise", 
    "Proceed", 
    "Protect", 
    "Punish", 
    "Pursue", 
    "Recruit", 
    "Refuse", 
    "Release", 
    "Relinquish", 
    "Repair", 
    "Repulse", 
    "Return", 
    "Reward", 
    "Ruin", 
    "Separate", 
    "Start", 
    "Stop", 
    "Strange", 
    "Struggle", 
    "Succeed", 
    "Support", 
    "Suppress", 
    "Take", 
    "Threaten", 
    "Transform", 
    "Trap", 
    "Travel", 
    "Triumph", 
    "Truce", 
    "Trust", 
    "Use", 
    "Usurp", 
    "Waste"
];

let eventActions2 = [
    "Advantage", 
    "Adversity", 
    "Agreement", 
    "Animal", 
    "Attention", 
    "Balance", 
    "Battle", 
    "Benefits", 
    "Building", 
    "Burden", 
    "Bureaucracy", 
    "Business", 
    "Chaos", 
    "Comfort", 
    "Completion", 
    "Conflict", 
    "Cooperation", 
    "Danger", 
    "Defense", 
    "Depletion", 
    "Disadvantage", 
    "Distraction", 
    "Elements", 
    "Emotion", 
    "Enemy", 
    "Energy", 
    "Environment", 
    "Expectation", 
    "Exterior", 
    "Extravagance", 
    "Failure", 
    "Fame", 
    "Fear", 
    "Freedom", 
    "Friend", 
    "Goal", 
    "Group", 
    "Health", 
    "Hindrance", 
    "Home", 
    "Hope", 
    "Idea", 
    "Illness", 
    "Illusion", 
    "Individual", 
    "Information", 
    "Innocent", 
    "Intellect", 
    "Interior", 
    "Investment", 
    "Leadership", 
    "Legal", 
    "Location", 
    "Military", 
    "Misfortune", 
    "Mundane", 
    "Nature", 
    "Needs", 
    "News", 
    "Normal", 
    "Object", 
    "Obscurity", 
    "Official", 
    "Opposition", 
    "Outside", 
    "Pain", 
    "Path", 
    "Peace", 
    "People", 
    "Personal", 
    "Physical", 
    "Plot", 
    "Portal", 
    "Possessions", 
    "Poverty", 
    "Power", 
    "Prison", 
    "Project", 
    "Protection", 
    "Reassurance", 
    "Representative", 
    "Riches", 
    "Safety", 
    "Strength", 
    "Success", 
    "Suffering", 
    "Surprise", 
    "Tactic", 
    "Technology", 
    "Tension", 
    "Time", 
    "Trial", 
    "Value", 
    "Vehicle", 
    "Victory", 
    "Vulnerability", 
    "Weapon", 
    "Weather", 
    "Work", 
    "Wound"
];

let eventDescriptor1 = [
   "Adventurously", 
   "Aggressively", 
   "Anxiously", 
   "Awkwardly", 
   "Beautifully", 
   "Bleakly", 
   "Boldly", 
   "Bravely", 
   "Busily", 
   "Calmly", 
   "Carefully", 
   "Carelessly", 
   "Cautiously", 
   "Ceaselessly", 
   "Cheerfully", 
   "Combatively", 
   "Coolly", 
   "Crazily", 
   "Curiously", 
   "Dangerously", 
   "Defiantly", 
   "Deliberately", 
   "Delicately", 
   "Delightfully", 
   "Dimly", 
   "Efficiently", 
   "Emotionally", 
   "Energetically", 
   "Enormously", 
   "Enthusiastically", 
   "Excitedly", 
   "Fearfully", 
   "Ferociously", 
   "Fiercely", 
   "Foolishly", 
   "Fortunately", 
   "Frantically", 
   "Freely", 
   "Frighteningly", 
   "Fully", 
   "Generously", 
   "Gently", 
   "Gladly", 
   "Gracefully", 
   "Gratefully", 
   "Happily", 
   "Hastily", 
   "Healthily", 
   "Helpfully", 
   "Helplessly", 
   "Hopelessly", 
   "Innocently", 
   "Intensely", 
   "Interestingly", 
   "Irritatingly", 
   "Joyfully", 
   "Kindly", 
   "Lazily", 
   "Lightly", 
   "Loosely", 
   "Loudly", 
   "Lovingly", 
   "Loyally", 
   "Majestically", 
   "Meaningfully", 
   "Mechanically", 
   "Mildly", 
   "Miserably", 
   "Mockingly", 
   "Mysteriously", 
   "Naturally", 
   "Neatly", 
   "Nicely", 
   "Oddly", 
   "Offensively", 
   "Officially", 
   "Partially", 
   "Passively", 
   "Peacefully", 
   "Perfectly", 
   "Playfully", 
   "Politely", 
   "Positively", 
   "Powerfully", 
   "Quaintly", 
   "Quarrelsomely", 
   "Quietly", 
   "Roughly", 
   "Rudely", 
   "Ruthlessly", 
   "Slowly", 
   "Softly", 
   "Strangely", 
   "Swiftly", 
   "Threateningly", 
   "Timidly", 
   "Very", 
   "Violently", 
   "Wildly", 
   "Yieldingly"
];

let eventDescriptor2 = [
    "Abnormal", 
    "Amusing", 
    "Artificial", 
    "Average", 
    "Beautiful", 
    "Bizarre", 
    "Boring", 
    "Bright", 
    "Broken", 
    "Clean", 
    "Cold", 
    "Colorful", 
    "Colorless", 
    "Comforting", 
    "Creepy", 
    "Cute", 
    "Damaged", 
    "Dark", 
    "Defeated", 
    "Dirty", 
    "Disagreeable", 
    "Dry", 
    "Dull", 
    "Empty", 
    "Enormous", 
    "Extraordinary", 
    "Extravagant", 
    "Faded", 
    "Familiar", 
    "Fancy", 
    "Feeble", 
    "Festive", 
    "Flawless", 
    "Forlorn", 
    "Fragile", 
    "Fragrant", 
    "Fresh", 
    "Full", 
    "Glorious", 
    "Graceful", 
    "Hard", 
    "Harsh", 
    "Healthy", 
    "Heavy", 
    "Historical", 
    "Horrible", 
    "Important", 
    "Interesting", 
    "Juvenile", 
    "Lacking", 
    "Large", 
    "Lavish", 
    "Lean", 
    "Less", 
    "Lethal", 
    "Lively", 
    "Lonely", 
    "Lovely", 
    "Magnificent", 
    "Mature", 
    "Messy", 
    "Mighty", 
    "Military", 
    "Modern", 
    "Mundane", 
    "Mysterious", 
    "Natural", 
    "Normal", 
    "Odd", 
    "Old", 
    "Pale", 
    "Peaceful", 
    "Petite", 
    "Plain", 
    "Poor", 
    "Powerful", 
    "Protective", 
    "Quaint", 
    "Rare", 
    "Reassuring", 
    "Remarkable", 
    "Rotten", 
    "Rough", 
    "Ruined", 
    "Rustic", 
    "Scary", 
    "Shocking", 
    "Simple", 
    "Small", 
    "Smooth", 
    "Soft", 
    "Strong", 
    "Stylish", 
    "Unpleasant", 
    "Valuable", 
    "Vibrant", 
    "Warm", 
    "Watery", 
    "Weak", 
    "Young"
];

let eventLocations = [
    "Abandoned", 
    "Active", 
    "Artistic", 
    "Atmosphere", 
    "Beautiful", 
    "Bleak", 
    "Bright", 
    "Business", 
    "Calm", 
    "Charming", 
    "Clean", 
    "Cluttered", 
    "Cold", 
    "Colorful", 
    "Colorless", 
    "Confusing", 
    "Cramped", 
    "Creepy", 
    "Crude", 
    "Cute", 
    "Damaged", 
    "Dangerous", 
    "Dark", 
    "Delightful", 
    "Dirty", 
    "Domestic", 
    "Empty", 
    "Enclosed", 
    "Enormous", 
    "Entrance", 
    "Exclusive", 
    "Exposed", 
    "Extravagant", 
    "Familiar", 
    "Fancy", 
    "Festive", 
    "Foreboding", 
    "Fortunate", 
    "Fragrant", 
    "Frantic", 
    "Frightening", 
    "Full", 
    "Harmful", 
    "Helpful", 
    "Horrible", 
    "Important", 
    "Impressive", 
    "Inactive", 
    "Intense", 
    "Intriguing", 
    "Lively", 
    "Lonely", 
    "Long", 
    "Loud", 
    "Meaningful", 
    "Messy", 
    "Mobile", 
    "Modern", 
    "Mundane", 
    "Mysterious", 
    "Natural", 
    "New", 
    "Occupied", 
    "Odd", 
    "Official", 
    "Old", 
    "Open", 
    "Peaceful", 
    "Personal", 
    "Plain", 
    "Portal", 
    "Protected", 
    "Protection", 
    "Purposeful", 
    "Quiet", 
    "Reassuring", 
    "Remote", 
    "Resourceful", 
    "Ruined", 
    "Rustic", 
    "Safe", 
    "Services", 
    "Simple", 
    "Small", 
    "Spacious", 
    "Storage", 
    "Strange", 
    "Stylish", 
    "Suspicious", 
    "Tall", 
    "Threatening", 
    "Tranquil", 
    "Unexpected", 
    "Unpleasant", 
    "Unusual", 
    "Useful", 
    "Warm", 
    "Warning", 
    "Watery", 
    "Welcoming"
];

let eventCharacters = [
    "Accompanied", 
    "Active", 
    "Aggressive", 
    "Ambush", 
    "Animal", 
    "Anxious", 
    "Armed", 
    "Beautiful", 
    "Bold", 
    "Busy", 
    "Calm", 
    "Careless", 
    "Casual", 
    "Cautious", 
    "Classy", 
    "Colorful", 
    "Combative", 
    "Crazy", 
    "Creepy", 
    "Curious", 
    "Dangerous", 
    "Deceitful", 
    "Defeated", 
    "Defiant", 
    "Delightful", 
    "Emotional", 
    "Energetic", 
    "Equipped", 
    "Excited", 
    "Expected", 
    "Familiar", 
    "Fast", 
    "Feeble", 
    "Feminine", 
    "Ferocious", 
    "Foe", 
    "Foolish", 
    "Fortunate", 
    "Fragrant", 
    "Frantic", 
    "Friend", 
    "Frightened", 
    "Frightening", 
    "Generous", 
    "Glad", 
    "Happy", 
    "Harmful", 
    "Helpful", 
    "Helpless", 
    "Hurt", 
    "Important", 
    "Inactive", 
    "Influential", 
    "Innocent", 
    "Intense", 
    "Knowledgeable", 
    "Large", 
    "Lonely", 
    "Loud", 
    "Loyal", 
    "Masculine", 
    "Mighty", 
    "Miserable", 
    "Multiple", 
    "Mundane", 
    "Mysterious", 
    "Natural", 
    "Odd", 
    "Official", 
    "Old", 
    "Passive", 
    "Peaceful", 
    "Playful", 
    "Powerful", 
    "Professional", 
    "Protected", 
    "Protecting", 
    "Questioning", 
    "Quiet", 
    "Reassuring", 
    "Resourceful", 
    "Seeking", 
    "Skilled", 
    "Slow", 
    "Small", 
    "Stealthy", 
    "Strange", 
    "Strong", 
    "Tall", 
    "Thieving", 
    "Threatening", 
    "Triumphant", 
    "Unexpected", 
    "Unnatural", 
    "Unusual", 
    "Violent", 
    "Vocal", 
    "Weak", 
    "Wild", 
    "Young"
];

let eventObjects = [
    "Active", 
    "Artistic", 
    "Average", 
    "Beautiful", 
    "Bizarre", 
    "Bright", 
    "Clothing", 
    "Clue", 
    "Cold", 
    "Colorful", 
    "Communication", 
    "Complicated", 
    "Confusing", 
    "Consumable", 
    "Container", 
    "Creepy", 
    "Crude", 
    "Cute", 
    "Damaged", 
    "Dangerous", 
    "Deactivated", 
    "Deliberate", 
    "Delightful", 
    "Desired", 
    "Domestic", 
    "Empty", 
    "Energy", 
    "Enormous", 
    "Equipment", 
    "Expected", 
    "Expended", 
    "Extravagant", 
    "Faded", 
    "Familiar", 
    "Fancy", 
    "Flora", 
    "Fortunate", 
    "Fragile", 
    "Fragrant", 
    "Frightening", 
    "Garbage", 
    "Guidance", 
    "Hard", 
    "Harmful", 
    "Healing", 
    "Heavy", 
    "Helpful", 
    "Horrible", 
    "Important", 
    "Inactive", 
    "Information", 
    "Intriguing", 
    "Large", 
    "Lethal", 
    "Light", 
    "Liquid", 
    "Loud", 
    "Majestic", 
    "Meaningful", 
    "Mechanical", 
    "Modern", 
    "Moving", 
    "Multiple", 
    "Mundane", 
    "Mysterious", 
    "Natural", 
    "New", 
    "Odd", 
    "Official", 
    "Old", 
    "Ornamental", 
    "Ornate", 
    "Personal", 
    "Powerful", 
    "Prized", 
    "Protection", 
    "Rare", 
    "Ready", 
    "Reassuring", 
    "Resource", 
    "Ruined", 
    "Small", 
    "Soft", 
    "Solitary", 
    "Stolen", 
    "Strange", 
    "Stylish", 
    "Threatening", 
    "Tool", 
    "Travel", 
    "Unexpected", 
    "Unpleasant", 
    "Unusual", 
    "Useful", 
    "Useless", 
    "Valuable", 
    "Warm", 
    "Weapon", 
    "Wet", 
    "Worn"
];