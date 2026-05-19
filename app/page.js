<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>NIMAD ZAYKA SPICES</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">

  <style>

    *{
      margin:0;
      padding:0;
      box-sizing:border-box;
    }

    body{

      font-family:'Poppins',sans-serif;
      min-height:100vh;
      overflow-x:hidden;
      background:
      linear-gradient(rgba(0,0,0,.72),rgba(0,0,0,.85)),
      url('https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=1600&auto=format&fit=crop');

      background-size:cover;
      background-position:center;
      background-attachment:fixed;
      color:white;
      position:relative;

    }

    body::before{

      content:"";
      position:fixed;
      inset:0;

      background:
      radial-gradient(circle at top left,rgba(255,140,0,.18),transparent 30%),
      radial-gradient(circle at bottom right,rgba(255,0,0,.15),transparent 30%),
      radial-gradient(circle at center,rgba(255,200,0,.08),transparent 45%);

      pointer-events:none;
      z-index:0;

    }

    .floating-spices{

      position:fixed;
      inset:0;
      pointer-events:none;
      z-index:0;

    }

    .spice{

      position:absolute;
      border-radius:50%;
      filter:blur(.5px);
      opacity:.95;

    }

    .spice1{
      width:180px;
      height:180px;
      background:url('https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=1200&auto=format&fit=crop');
      background-size:cover;
      top:-40px;
      left:-40px;
      box-shadow:0 0 50px rgba(255,80,0,.4);
    }

    .spice2{
      width:160px;
      height:160px;
      background:url('https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=1200&auto=format&fit=crop');
      background-size:cover;
      bottom:-30px;
      right:-30px;
      box-shadow:0 0 50px rgba(255,180,0,.35);
    }

    .container{

      position:relative;
      z-index:2;
      width:100%;
      max-width:500px;
      margin:auto;
      padding:25px 20px 40px;

    }

    .logo-box{

      width:240px;
      margin:30px auto 25px;
      padding:28px 20px;

      background:
      linear-gradient(145deg,#7b0000,#c1121f,#8b0000);

      border:2px solid rgba(255,215,0,.8);

      border-radius:30px;

      text-align:center;

      box-shadow:
      0 0 25px rgba(255,174,0,.4),
      0 0 60px rgba(255,0,0,.25),
      inset 0 0 15px rgba(255,255,255,.15);

      position:relative;

      overflow:hidden;

    }

    .logo-box::before{

      content:"";
      position:absolute;
      inset:0;

      background:
      linear-gradient(
      135deg,
      rgba(255,255,255,.35),
      transparent 30%,
      transparent 70%,
      rgba(255,255,255,.12)
      );

    }

    .logo-text{

      font-family:'Cinzel',serif;
      font-size:34px;
      line-height:1.1;
      font-weight:800;
      color:white;
      text-shadow:
      0 0 12px rgba(255,255,255,.5),
      0 0 22px rgba(255,180,0,.35);

      letter-spacing:2px;

    }

    .leaf{

      color:#ffcc00;
      font-size:20px;
      margin:6px 0;

    }

    .tagline{

      text-align:center;
      margin-bottom:35px;

    }

    .divider{

      color:#ffcc00;
      font-size:20px;
      margin-bottom:10px;

    }

    .tagline h2{

      font-family:'Cinzel',serif;
      color:#ffd700;
      font-size:24px;
      letter-spacing:2px;

      text-shadow:0 0 12px rgba(255,215,0,.4);

    }

    .buttons{

      display:flex;
      flex-direction:column;
      gap:18px;

    }

    .btn{

      display:flex;
      align-items:center;
      justify-content:space-between;

      padding:18px 20px;

      border-radius:24px;

      text-decoration:none;

      position:relative;
      overflow:hidden;

      backdrop-filter:blur(10px);

      box-shadow:
      0 10px 30px rgba(0,0,0,.4),
      inset 0 0 15px rgba(255,255,255,.12);

      border:1px solid rgba(255,255,255,.12);

      transition:.35s ease;

    }

    .btn:hover{

      transform:translateY(-3px) scale(1.02);

    }

    .btn::before{

      content:"";
      position:absolute;
      inset:0;

      background:
      linear-gradient(
      120deg,
      rgba(255,255,255,.28),
      transparent 40%,
      transparent 60%,
      rgba(255,255,255,.08)
      );

    }

    .btn-left{

      display:flex;
      align-items:center;
      gap:15px;

      z-index:2;

    }

    .icon{

      width:52px;
      height:52px;

      border-radius:50%;

      display:flex;
      align-items:center;
      justify-content:center;

      font-size:24px;

      background:rgba(255,255,255,.15);

      backdrop-filter:blur(6px);

      box-shadow:0 0 12px rgba(255,255,255,.2);

    }

    .btn-text h3{

      font-size:18px;
      font-weight:700;

    }

    .btn-text p{

      font-size:13px;
      opacity:.95;

    }

    .arrow{

      font-size:24px;
      z-index:2;

    }

    .whatsapp{
      background:linear-gradient(135deg,#00a651,#25D366);
    }

    .instagram{
      background:linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045);
    }

    .website{
      background:linear-gradient(135deg,#ff9800,#ff6f00);
    }

    .call{
      background:linear-gradient(135deg,#7b0000,#c1121f);
    }

    .address{
      background:linear-gradient(135deg,#6d4c41,#b8860b);
    }

    .brochure{
      background:linear-gradient(135deg,#5a0000,#8b0000);
    }

    .footer{

      margin-top:40px;

      background:rgba(0,0,0,.45);

      border:1px solid rgba(255,215,0,.15);

      backdrop-filter:blur(10px);

      border-radius:22px;

      padding:25px 15px;

      box-shadow:0 0 25px rgba(255,174,0,.12);

    }

    .footer-grid{

      display:grid;
      grid-template-columns:1fr 1fr 1fr;
      gap:12px;

      text-align:center;

    }

    .footer-col{

      padding:0 8px;
      border-right:1px solid rgba(255,215,0,.25);

    }

    .footer-col:last-child{
      border-right:none;
    }

    .footer h4{

      color:#ffd700;
      margin-bottom:8px;
      font-size:16px;

    }

    .footer p{

      font-size:13px;
      line-height:1.5;
      opacity:.95;

    }

    .admin-btn{

      margin-top:20px;

      width:100%;

      display:flex;
      align-items:center;
      justify-content:center;
      gap:10px;

      padding:14px;

      border-radius:16px;

      background:
      linear-gradient(
      135deg,
      rgba(255,180,0,.25),
      rgba(255,215,0,.15)
      );

      border:1px solid rgba(255,215,0,.35);

      color:#ffd700;

      font-weight:700;

      text-decoration:none;

      backdrop-filter:blur(8px);

      box-shadow:0 0 18px rgba(255,215,0,.18);

    }

    @media(max-width:480px){

      .logo-box{
        width:210px;
      }

      .logo-text{
        font-size:30px;
      }

      .btn{
        padding:16px;
      }

      .btn-text h3{
        font-size:16px;
      }

      .footer-grid{
        grid-template-columns:1fr;
      }

      .footer-col{
        border-right:none;
        border-bottom:1px solid rgba(255,215,0,.2);
        padding-bottom:15px;
      }

      .footer-col:last-child{
        border-bottom:none;
      }

    }

  </style>

</head>

<body>

  <div class="floating-spices">

    <div class="spice spice1"></div>

    <div class="spice spice2"></div>

  </div>

  <div class="container">

    <div class="logo-box">

      <div class="leaf">❈</div>

      <div class="logo-text">
        NIMAD<br>
        ZAYKA<br>
        SPICES
      </div>

      <div class="leaf">❈</div>

    </div>

    <div class="tagline">

      <div class="divider">✦ ✦ ✦</div>

      <h2>PREMIUM INDIAN SPICES</h2>

    </div>

    <div class="buttons">

      <a href="https://wa.me/916265996333" class="btn whatsapp">

        <div class="btn-left">

          <div class="icon">💬</div>

          <div class="btn-text">

            <h3>Order on WhatsApp</h3>

            <p>+91 6265996333</p>

          </div>

        </div>

        <div class="arrow">➜</div>

      </a>

      <a href="https://instagram.com/nimadzayka.in" class="btn instagram">

        <div class="btn-left">

          <div class="icon">📸</div>

          <div class="btn-text">

            <h3>Follow on Instagram</h3>

            <p>@nimadzayka.in</p>

          </div>

        </div>

        <div class="arrow">➜</div>

      </a>

      <a href="https://www.nimadzayka.com" class="btn website">

        <div class="btn-left">

          <div class="icon">🌐</div>

          <div class="btn-text">

            <h3>Visit Our Website</h3>

            <p>www.nimadzayka.com</p>

          </div>

        </div>

        <div class="arrow">➜</div>

      </a>

      <a href="tel:+916265996333" class="btn call">

        <div class="btn-left">

          <div class="icon">📞</div>

          <div class="btn-text">

            <h3>Call Us</h3>

            <p>+91 6265996333</p>

          </div>

        </div>

        <div class="arrow">➜</div>

      </a>

      <a href="https://maps.app.goo.gl/Y98H1D4qFaRkad719" class="btn address">

        <div class="btn-left">

          <div class="icon">📍</div>

          <div class="btn-text">

            <h3>Our Address</h3>

            <p>Open Google Maps</p>

          </div>

        </div>

        <div class="arrow">➜</div>

      </a>

      <a href="#" class="btn brochure">

        <div class="btn-left">

          <div class="icon">📖</div>

          <div class="btn-text">

            <h3>View Brochure</h3>

            <p>All products & catalogue</p>

          </div>

        </div>

        <div class="arrow">➜</div>

      </a>

    </div>

    <div class="footer">

      <div class="footer-grid">

        <div class="footer-col">

          <h4>🛡 FSSAI</h4>

          <p>
            21425190000195
          </p>

        </div>

        <div class="footer-col">

          <h4>🌿 100%</h4>

          <p>
            NATURAL
          </p>

        </div>

        <div class="footer-col">

          <h4>PREMIUM</h4>

          <p>
            Packed with Purity,<br>
            Delivered with Trust.
          </p>

        </div>

      </div>

      <a href="/admin" class="admin-btn">

        🛡 Admin Panel

      </a>

    </div>

  </div>

</body>
</html>
