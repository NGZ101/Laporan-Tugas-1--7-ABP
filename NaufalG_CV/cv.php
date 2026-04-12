<?php
header('Content-Type: application/json');

// Data CV
$data = [
    "skills" => [
        "HTML and CSS",
        "JS using Node.js / Express.js",
        "PHP using Laravel",
        "SQL using MySQL and phpMyAdmin",
        "Python",
        "Native Level Indonesian & English"
    ],
    "experience" => [
        [
            "period" => "April - December 2025",
            "title" => "BEM KEMA Telkom University Purwokerto | Department of Home Affairs Intern",
            "responsibilities" => [
                "Communicated with other organization on campus and hear out all their problems and suggestions",
                "Noted all the suggestions made by the members of organizations and forwarded it to campus authority in charge of campus organizations",
                "Established relationships with staff of other campus organizations"
            ]
        ]
    ]
];

// Mengubah array PHP menjadi format JSON agar bisa dibaca JavaScript
echo json_encode($data);
?>