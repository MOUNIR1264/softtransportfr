<?php
// Activer l'affichage des erreurs (utile en local)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Test PHP</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f5f5f5;
            padding: 30px;
        }
        .card {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px #ddd;
            width: 400px;
        }
        h2 {
            color: #333;
        }
        pre {
            background: #eee;
            padding: 10px;
            border-radius: 4px;
            overflow: auto;
        }
    </style>
</head>
<body>

<div class="card">
    <h2>✔️ Test PHP réussi</h2>

    <p>La page est servie correctement depuis votre serveur Apache + PHP.</p>

    <h3>Infos PHP :</h3>
    <pre>
<?php
echo "Version de PHP : " . phpversion() . "\n";
echo "Extensions chargées :\n";
print_r(get_loaded_extensions());
?>
    </pre>

    <h3>Test MySQL :</h3>
    <pre>
<?php
try {
    $pdo = new PDO("mysql:host=mysql;dbname=testdb", "user", "password");
    echo "Connexion MySQL réussie ! 🎉\n";
} catch (Exception $e) {
    echo "Erreur MySQL : " . $e->getMessage();
}
?>
    </pre>
</div>

</body>
</html>
