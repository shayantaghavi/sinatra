// لینک‌های عمومی که برای همه ارسال می‌شوند
const generalLinks = [
  'vless://462fffce-700a-11ef-8101-2f08f4934135@jantit-ger.sinasv.ir:443?encryption=none&security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&allowInsecure=1&type=ws&path=%2Fvpnjantit#%DA%A9%D9%85%DA%A9%DB%8C%20-%20%D9%85%D9%88%D9%82%D8%AA'
];

// لینک‌های هر ارائه‌دهنده به صورت Map
const providerLinks = new Map([
  ["Mostafa-05", [
      'vless://c4642782-e7b8-4254-93a0-03cb76afb897@cdnjs.com:443?encryption=none&security=tls&sni=all-ws.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sinasv.ir&path=%2Flasso%2F%3Fed%3D1024#Mostafa-WS-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://de748705-de28-4b3b-a874-a636bdbbe256@openai.com:443?encryption=none&security=tls&sni=all-grp.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=grpc&host=all-grp.sinasv.ir&serviceName=lasso3&mode=gun#Mostafa-gRPC-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://9c464618-2d08-4b90-df40-3d93e37c60c5@openai.com:443?encryption=none&security=tls&sni=all-ws.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sbgzagros.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048#Mostafa-WS-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://bc12cc3e-1b79-4742-b528-d1e75d6afbd7@openai.com:443?type=grpc&serviceName=lasso3&security=tls&fp=chrome&alpn=h2%2Chttp%2F1.1&allowInsecure=1&sni=all-grp.sbgzagros.ir#Mostafa-gRPC-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://6cd8375d-4618-4304-fa05-191392d3dbbe@speedtest.net:443?encryption=none&security=tls&sni=speedtest.net&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&allowInsecure=1&type=ws&host=nazanin101.net&path=%2Fsineh%4085_saroon%2F%3Fed%3D1024#Mostafa-Fastly-%F0%9F%87%B3%F0%9F%87%B1',
      'trojan://CEkHQhh4BF@81.28.12.12:443?security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&allowInsecure=1&type=ws&host=speedtest-gcr.zagrost.ir&path=%2FSolana_shir%40nadare%2F%3Fed%3D1024#Mosi-GG-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://9c464618-2d08-4b90-df40-3d93e37c60c5@bama.ir:443?encryption=none&security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&type=ws&host=mana-c9ff40cdb8-hesam.apps.ir-thr-ba1.arvancaas.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048&sni=mana-c9ff40cdb8-hesam.apps.ir-thr-ba1.arvancaas.ir#Mostafa-NimV.5-%F0%9F%87%AE%F0%9F%87%B7%F0%9F%87%B3%F0%9F%87%B1'
  ]],
  ["Koosha-18", [
      'vless://e548033d-0d7d-4a1b-9579-2f1f97ffbe3c@cdnjs.com:443?encryption=none&security=tls&sni=all-ws.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sinasv.ir&path=%2Flasso%2F%3Fed%3D1024#Koosha-WS-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://39bf17fb-c3af-4889-838b-3fb89f0c8978@openai.com:443?encryption=none&security=tls&sni=all-grp-2.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=grpc&serviceName=lasso3&mode=gun#Koosha-gRPC-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://8b94c94d-d773-4faa-b546-71a0c94c5007@openai.com:443?encryption=none&security=tls&sni=all-ws.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sbgzagros.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048#Koosha-WS-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://4a3b347d-975f-4c6d-9c12-0e81d3f47f0d@openai.com:443?type=grpc&serviceName=lasso3&security=tls&fp=chrome&alpn=h2%2Chttp%2F1.1&allowInsecure=1&sni=all-grp.sbgzagros.ir#Koosha-gRPC-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://8b94c94d-d773-4faa-b546-71a0c94c5007@rithl.mohombi.ir:443?encryption=none&security=tls&sni=all-ws.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sbgzagros.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048#Koosha-Rightel-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://8b94c94d-d773-4faa-b546-71a0c94c5007@all.mohombi.ir:443?encryption=none&security=tls&sni=all-ws.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sbgzagros.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048#Koosha-Irancell-%F0%9F%87%B3%F0%9F%87%B1'
  ]],
  ["Koosha-1806", [
      'vless://e548033d-0d7d-4a1b-9579-2f1f97ffbe3c@cdnjs.com:443?encryption=none&security=tls&sni=all-ws.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sinasv.ir&path=%2Flasso%2F%3Fed%3D1024#Koosha-WS-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://39bf17fb-c3af-4889-838b-3fb89f0c8978@openai.com:443?encryption=none&security=tls&sni=all-grp-2.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=grpc&serviceName=lasso3&mode=gun#Koosha-gRPC-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://8b94c94d-d773-4faa-b546-71a0c94c5007@openai.com:443?encryption=none&security=tls&sni=all-ws.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sbgzagros.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048#Koosha-WS-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://5bef8a9f-6fb5-4fbe-bd87-edd4883d2883@spark-stg.partnersonline.com:443?encryption=none&security=tls&sni=nazanin101.net&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&allowInsecure=1&type=ws&host=nazanin101.net&path=%2Fsineh%4085_saroon%2F%3Fed%3D1024#Koosha-Fastly-%F0%9F%87%B3%F0%9F%87%B1',
      'trojan://YPWa58c38X@81.28.12.12:443?security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&allowInsecure=1&type=ws&host=speedtest-gcr.zagrost.ir&path=%2FSolana_shir%40nadare%2F%3Fed%3D1024#Koosha-GG-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://8b94c94d-d773-4faa-b546-71a0c94c5007@bama.ir:443?encryption=none&security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&type=ws&host=mana-c9ff40cdb8-hesam.apps.ir-thr-ba1.arvancaas.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048&sni=mana-c9ff40cdb8-hesam.apps.ir-thr-ba1.arvancaas.ir#Koosha-NimV.5-%F0%9F%87%AE%F0%9F%87%B7%F0%9F%87%B3%F0%9F%87%B1'

  ]],
  ["Mary-21", [
      'vless://d738f5b1-3f42-47b6-b25c-0e334667351c@cdnjs.com:443?encryption=none&security=tls&sni=all-ws.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sinasv.ir&path=%2Flasso%2F%3Fed%3D1024#Mary-WS-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://7ca1171d-6db1-4277-803d-f678d0999a38@openai.com:443?encryption=none&security=tls&sni=all-grp.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=grpc&host=all-grp.sinasv.ir&serviceName=lasso3&mode=gun#Maryam-gRPC-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://bce0fed3-4df5-4545-ba31-6e02f1d25bdc@openai.com:443?encryption=none&security=tls&sni=all-ws.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sbgzagros.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048#Maryam-WS-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://990ccfd4-6522-4d48-dbce-33c802ffdddd@spark-stg.partnersonline.com:443?encryption=none&security=tls&sni=nazanin101.net&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&allowInsecure=1&type=ws&host=nazanin101.net&path=%2Fsineh%4085_saroon%2F%3Fed%3D1024#Mary-Fastly-%F0%9F%87%B3%F0%9F%87%B1',
      'trojan://KQMGv4DSOa@81.28.12.12:443?security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&allowInsecure=1&type=ws&host=speedtest-gcr.zagrost.ir&path=%2FSolana_shir%40nadare%2F%3Fed%3D1024#Mary-GG-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://bce0fed3-4df5-4545-ba31-6e02f1d25bdc@bama.ir:443?encryption=none&security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&type=ws&host=mana-c9ff40cdb8-hesam.apps.ir-thr-ba1.arvancaas.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048&sni=mana-c9ff40cdb8-hesam.apps.ir-thr-ba1.arvancaas.ir#Maryam-NimV.5-%F0%9F%87%AE%F0%9F%87%B7%F0%9F%87%B3%F0%9F%87%B1',

  ]],
  ["Nazi-20", [
      'vless://a72b0756-0c87-4675-87dd-f2bebdde9630@cdnjs.com:443?encryption=none&security=tls&sni=all-ws.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sinasv.ir&path=%2Flasso%2F%3Fed%3D1024#Nazi-WS-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://c4b89b6e-2f2c-4f75-a579-a843c0b10def@openai.com:443?encryption=none&security=tls&sni=all-grp.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=grpc&host=all-grp.sinasv.ir&serviceName=lasso3&mode=gun#Nazi-gRPC-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://4f1745cb-aa0d-405f-8a83-608f4f0b4339@openai.com:443?encryption=none&security=tls&sni=all-ws.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sbgzagros.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048#Nazi-WS-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://030489eb-fbcc-4b12-af8d-0ddb2054617f@spark-stg.partnersonline.com:443?encryption=none&security=tls&sni=nazanin101.net&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&allowInsecure=1&type=ws&host=nazanin101.net&path=%2Fsineh%4085_saroon%2F%3Fed%3D1024#Nazi-Fastly-%F0%9F%87%B3%F0%9F%87%B1',
      'trojan://Mdc2dxRsnk@81.28.12.12:443?security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&allowInsecure=1&type=ws&host=speedtest-gcr.zagrost.ir&path=%2FSolana_shir%40nadare%2F%3Fed%3D1024#Nazi-GG-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://4f1745cb-aa0d-405f-8a83-608f4f0b4339@bama.ir:443?encryption=none&security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&type=ws&host=mana-c9ff40cdb8-hesam.apps.ir-thr-ba1.arvancaas.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048&sni=mana-c9ff40cdb8-hesam.apps.ir-thr-ba1.arvancaas.ir#Nazi-NimV.5-%F0%9F%87%AE%F0%9F%87%B7%F0%9F%87%B3%F0%9F%87%B1'

  ]],
  ["Zagros-50", [
      'vless://044106bd-7bb9-42e4-eb91-4f9b95877282@speedtest.net:443?encryption=none&security=tls&sni=speedtest.net&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&allowInsecure=1&type=ws&host=nazanin101.net&path=%2Fsineh%4085_saroon%2F%3Fed%3D8080#Zagros-Fastly-%F0%9F%87%B3%F0%9F%87%B1%2C',
      'vless://129d2002-8cf4-4b4f-84b2-6609b3fd44c1@openai.com:443?encryption=none&security=tls&sni=all-grp-2.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=grpc&serviceName=lasso3&mode=gun#Zagros-gRPC-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://563f8890-e0de-4639-8d1a-5f0cba47d6d7@openai.com:443?encryption=none&security=tls&sni=all-ws.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sinasv.ir&path=%2Flasso%2F%3Fed%3D1024#Zagros-WS-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://c338ef6f-dd1a-4f8a-e6a9-12403c9117ea@openai.com:443?encryption=none&security=tls&sni=all-ws.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sbgzagros.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048#Zagros-WS-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://f0c7666e-6aae-4900-81a6-b3f04fb2167c@openai.com:443?type=grpc&serviceName=lasso3&security=tls&fp=chrome&alpn=h2%2Chttp%2F1.1&allowInsecure=1&sni=all-grp.sbgzagros.ir#Zagros-gRPC-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://5e46e018-7006-11ef-8ec1-534b1b99c9ff@jantit-ger.sinasv.ir:443?encryption=none&security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&type=ws&path=%2Fvpnjantit#Ad-Google'
  ]],
  ["Venus-18", [
      'vless://8670590a-4520-4f66-bec3-c76ac430ea3c@cdnjs.com:443?encryption=none&security=tls&sni=all-ws.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sinasv.ir&path=%2Flasso%2F%3Fed%3D1024#Venus-WS-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://926be250-b97b-467b-8492-ba1b5c3958c1@openai.com:443?encryption=none&security=tls&sni=all-grp.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=grpc&host=all-grp.sinasv.ir&serviceName=lasso3&mode=gun#Venus-gRPC-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://ea75fe6d-0b51-4c0b-a76c-bbc75f89812c@openai.com:443?encryption=none&security=tls&sni=all-ws.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sbgzagros.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048#Venus-WS-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://459ed38d-20b2-4996-901a-7eda216b9058@spark-stg.partnersonline.com:443?encryption=none&security=tls&sni=nazanin101.net&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&allowInsecure=1&type=ws&host=nazanin101.net&path=%2Fsineh%4085_saroon%2F%3Fed%3D1024#Venus-Fastly-%F0%9F%87%B3%F0%9F%87%B1',
      'trojan://ZfAQfAReix@81.28.12.12:443?security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&allowInsecure=1&type=ws&host=speedtest-gcr.zagrost.ir&path=%2FSolana_shir%40nadare%2F%3Fed%3D1024#Venus-GG-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://ea75fe6d-0b51-4c0b-a76c-bbc75f89812c@bama.ir:443?encryption=none&security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&type=ws&host=mana-c9ff40cdb8-hesam.apps.ir-thr-ba1.arvancaas.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048&sni=mana-c9ff40cdb8-hesam.apps.ir-thr-ba1.arvancaas.ir#Venus-NimV.5-%F0%9F%87%AE%F0%9F%87%B7%F0%9F%87%B3%F0%9F%87%B1'
  ]],
  ["Negar-04", [
      'vless://b75ecf22-bde4-4597-8b0f-8dc3b8c30841@cdnjs.com:443?encryption=none&security=tls&sni=all-ws.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sinasv.ir&path=%2Flasso%2F%3Fed%3D1024#Negar-WS-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://78fd010e-2329-4f1a-b261-e016f3ba5f85@openai.com:443?encryption=none&security=tls&sni=all-grp.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=grpc&host=all-grp.sinasv.ir&serviceName=lasso3&mode=gun#Negar-gRPC-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://0f4cabd8-3ef0-4786-fed6-feb043f3e173@openai.com:443?encryption=none&security=tls&sni=all-ws.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sbgzagros.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048#Negar-WS-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://a4460329-0338-4ef8-fe43-218b925ff0a2@spark-stg.partnersonline.com:443?encryption=none&security=tls&sni=nazanin101.net&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&allowInsecure=1&type=ws&host=nazanin101.net&path=%2Fsineh%4085_saroon%2F%3Fed%3D1024#Negar-Fastly-%F0%9F%87%B3%F0%9F%87%B1',
      'trojan://1TcdX4lpbO@81.28.12.12:443?security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&allowInsecure=1&type=ws&host=speedtest-gcr.zagrost.ir&path=%2FSolana_shir%40nadare%2F%3Fed%3D1024#Negar-GG-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://0f4cabd8-3ef0-4786-fed6-feb043f3e173@bama.ir:443?encryption=none&security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&type=ws&host=mana-c9ff40cdb8-hesam.apps.ir-thr-ba1.arvancaas.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048&sni=mana-c9ff40cdb8-hesam.apps.ir-thr-ba1.arvancaas.ir#Negar-NimV.5-%F0%9F%87%AE%F0%9F%87%B7%F0%9F%87%B3%F0%9F%87%B1'
  ]],
  ["Javad-25", [
      'vless://5894a07f-d4e6-4db0-a79d-ddf39787c2fd@cdnjs.com:443?encryption=none&security=tls&sni=all-grp-2.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=grpc&serviceName=lasso3&mode=gun#Javad-gRPC-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://de5629ef-3179-4d22-a987-0bfed524f3cf@openai.com:443?encryption=none&security=tls&sni=all-ws.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sinasv.ir&path=%2Flasso%2F%3Fed%3D1024#Javad-WS-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://db5bea87-424a-4ca2-d527-725865becf1b@openai.com:443?encryption=none&security=tls&sni=all-ws.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sbgzagros.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048#Javad-WS-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://79802864-5b5e-4cbc-8a00-2265eb1de62f@spark-stg.partnersonline.com:443?encryption=none&security=tls&sni=nazanin101.net&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&allowInsecure=1&type=ws&host=nazanin101.net&path=%2Fsineh%4085_saroon%2F%3Fed%3D1024#Javad-Fastly-%F0%9F%87%B3%F0%9F%87%B1',
      'trojan://OeK1GELJ7x@81.28.12.12:443?security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&allowInsecure=1&type=ws&host=speedtest-gcr.zagrost.ir&path=%2FSolana_shir%40nadare%2F%3Fed%3D1024#Javad-GG-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://db5bea87-424a-4ca2-d527-725865becf1b@bama.ir:443?encryption=none&security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&type=ws&host=mana-c9ff40cdb8-hesam.apps.ir-thr-ba1.arvancaas.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048&sni=mana-c9ff40cdb8-hesam.apps.ir-thr-ba1.arvancaas.ir#Javad-NimV.5-%F0%9F%87%AE%F0%9F%87%B7%F0%9F%87%B3%F0%9F%87%B1'
  ]],
  ["Niloo-85", [
      'vless://177b5851-2e16-4a12-b2bb-b20b34c708c3@cdnjs.com:443?encryption=none&security=tls&sni=all-ws.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sinasv.ir&path=%2Flasso%2F%3Fed%3D1024#Niloo-WS-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://66dd601b-5901-401b-bee3-3ed36035e64f@openai.com:443?encryption=none&security=tls&sni=all-grp.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=grpc&serviceName=lasso3&mode=gun#Niloo-gRPC-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://e5808aaa-cced-43e8-d918-efc6e0d88c60@openai.com:443?encryption=none&security=tls&sni=all-ws.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sbgzagros.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048#Niloo-WS-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://b99c4716-5d3e-4e15-bf78-b1c60285bf91@spark-stg.partnersonline.com:443?encryption=none&security=tls&sni=nazanin101.net&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&allowInsecure=1&type=ws&host=nazanin101.net&path=%2Fsineh%4085_saroon%2F%3Fed%3D1024#Niloo-Fastly-%F0%9F%87%B3%F0%9F%87%B1',
      'trojan://CJCF16EFxN@81.28.12.12:443?security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&allowInsecure=1&type=ws&host=speedtest-gcr.zagrost.ir&path=%2FSolana_shir%40nadare%2F%3Fed%3D1024#Niloo-GG-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://e5808aaa-cced-43e8-d918-efc6e0d88c60@bama.ir:443?encryption=none&security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&type=ws&host=mana-c9ff40cdb8-hesam.apps.ir-thr-ba1.arvancaas.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048&sni=mana-c9ff40cdb8-hesam.apps.ir-thr-ba1.arvancaas.ir#Niloo-NimV.5-%F0%9F%87%AE%F0%9F%87%B7%F0%9F%87%B3%F0%9F%87%B1'
  ]],
  ["Mehdi-13", [
      'vless://387720f2-c23c-4906-ad01-bbaeb1264558@cdnjs.com:443?encryption=none&security=tls&sni=all-grp.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=grpc&serviceName=lasso3&mode=gun#Mehdi-gRPC-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://430dc4b1-2acb-4934-b9ff-909fc9a068eb@openai.com:443?encryption=none&security=tls&sni=all-ws.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sinasv.ir&path=%2Flasso%2F%3Fed%3D1024#Mehdi-WS-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://72cc8b6e-c8d7-4f11-a964-6092e6a8de1a@openai.com:443?encryption=none&security=tls&sni=all-ws.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sbgzagros.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048#Mehdi-WS-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://12ad72c0-cdb3-4950-8803-48c55387f855@spark-stg.partnersonline.com:443?encryption=none&security=tls&sni=nazanin101.net&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&allowInsecure=1&type=ws&host=nazanin101.net&path=%2Fsineh%4085_saroon%2F%3Fed%3D1024#Mehdi-Fastly-%F0%9F%87%B3%F0%9F%87%B1',
      'trojan://cYMFoI0Ft2@81.28.12.12:443?security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&allowInsecure=1&type=ws&host=speedtest-gcr.zagrost.ir&path=%2FSolana_shir%40nadare%2F%3Fed%3D1024#Mehdi-GG-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://72cc8b6e-c8d7-4f11-a964-6092e6a8de1a@bama.ir:443?encryption=none&security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&type=ws&host=mana-c9ff40cdb8-hesam.apps.ir-thr-ba1.arvancaas.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048&sni=mana-c9ff40cdb8-hesam.apps.ir-thr-ba1.arvancaas.ir#Mehdi-NimV.5-%F0%9F%87%AE%F0%9F%87%B7%F0%9F%87%B3%F0%9F%87%B1'
  ]],
  ["Sasan-10", [
      'vless://d224287d-43b6-41a1-83b7-13ae757d59f1@cdnjs.com:443?encryption=none&security=tls&sni=all-ws.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sinasv.ir&path=%2Flasso%2F%3Fed%3D1024#Sasan-WS-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://7edf7e7d-6f99-458e-a5c6-bed272a16838@openai.com:443?encryption=none&security=tls&sni=all-grp.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=grpc&serviceName=lasso3&mode=gun#Sasan-gRPC-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://ae2b3463-53f0-464e-99c1-5070fc649146@openai.com:443?encryption=none&security=tls&sni=all-ws.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sbgzagros.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048#Sasan-WS-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://2d2b01ac-22be-4bd6-fc56-f060b1ed125e@speedtest.net:443?encryption=none&security=tls&sni=speedtest.net&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&allowInsecure=1&type=ws&host=nazanin101.net&path=%2Fsineh%4085_saroon%2F%3Fed%3D1024#Sasan-Fastly-%F0%9F%87%B3%F0%9F%87%B1',
      'trojan://k3gaH8qIjK@81.28.12.12:443?security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&allowInsecure=1&type=ws&host=speedtest-gcr.zagrost.ir&path=%2FSolana_shir%40nadare%2F%3Fed%3D1024#Sasan-GG-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://ae2b3463-53f0-464e-99c1-5070fc649146@bama.ir:443?encryption=none&security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&type=ws&host=mana-c9ff40cdb8-hesam.apps.ir-thr-ba1.arvancaas.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048&sni=mana-c9ff40cdb8-hesam.apps.ir-thr-ba1.arvancaas.ir#Sasan-NimV.5-%F0%9F%87%AE%F0%9F%87%B7%F0%9F%87%B3%F0%9F%87%B1'
  ]],
  ["Ramin-16", [
      'vless://54e8452e-937c-448e-b581-12fa9087d9cc@cdnjs.com:443?encryption=none&security=tls&sni=all-ws.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sinasv.ir&path=%2Flasso%2F%3Fed%3D1024#Ramin-WS-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://175e9c93-dc9c-4a50-b08e-412c4538a43c@openai.com:443?encryption=none&security=tls&sni=all-grp.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=grpc&serviceName=lasso3&mode=gun#Ramin-gRPC-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://8ead9b26-0d23-4917-b173-9283b4d0af5e@openai.com:443?encryption=none&security=tls&sni=all-ws.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sbgzagros.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048#Ramin-WS-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://af9ea0d7-688b-4f2b-e306-cf6e05ba66de@spark-stg.partnersonline.com:443?encryption=none&security=tls&sni=nazanin101.net&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&allowInsecure=1&type=ws&host=nazanin101.net&path=%2Fsineh%4085_saroon%2F%3Fed%3D1024#Ramin-Fastly-%F0%9F%87%B3%F0%9F%87%B1',
      'trojan://wcFsxkDEXS@81.28.12.12:443?security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&allowInsecure=1&type=ws&host=speedtest-gcr.zagrost.ir&path=%2FSolana_shir%40nadare%2F%3Fed%3D1024#Ramin-GG-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://8ead9b26-0d23-4917-b173-9283b4d0af5e@bama.ir:443?encryption=none&security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&type=ws&host=mana-c9ff40cdb8-hesam.apps.ir-thr-ba1.arvancaas.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048&sni=mana-c9ff40cdb8-hesam.apps.ir-thr-ba1.arvancaas.ir#Ramin-NimV.5-%F0%9F%87%AE%F0%9F%87%B7%F0%9F%87%B3%F0%9F%87%B1'
  ]],
  ["Armen-40", [
      'vless://1386b7d5-237e-46c6-b52d-3881cac68f11@cdnjs.com:443?encryption=none&security=tls&sni=all-ws.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sinasv.ir&path=%2Flasso%2F%3Fed%3D1024#Armen-WS-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://73a1618b-75fb-4590-9670-43ffae6fb575@openai.com:443?encryption=none&security=tls&sni=all-grp.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=grpc&serviceName=lasso3&mode=gun#Armen-gRPC-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://19938d7a-b55b-4fc0-c3c6-29ef79b3d5e0@openai.com:443?encryption=none&security=tls&sni=all-ws.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sbgzagros.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D20482Flasso#Armen-WS-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://59e01b11-1bb4-4ae9-b80d-349f094ebaae@spark-stg.partnersonline.com:443?encryption=none&security=tls&sni=nazanin101.net&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&allowInsecure=1&type=ws&host=nazanin101.net&path=%2Fsineh%4085_saroon%2F%3Fed%3D1024#Armen-Fastly-%F0%9F%87%B3%F0%9F%87%B1',

      'trojan://3BSiPn7n3q@heat-shockprotein.com:443?security=tls&sni=heat-shockprotein.com&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-gcore-01.sinasv.ir&path=%2Ftroma#Armen-Gcore-%F0%9F%87%B8%F0%9F%87%AA'
  ]],
  ["Olivia-100", [
      'vless://c13e60b2-73fc-46fe-a203-3060cf10ad99@cdnjs.com:443?encryption=none&security=tls&sni=all-ws.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sinasv.ir&path=%2Flasso%2F%3Fed%3D1024#Olivia-WS-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://29528cb0-bcb5-43df-bd50-0dc69d42ab0e@openai.com:443?encryption=none&security=tls&sni=all-grp.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=grpc&serviceName=lasso3&mode=gun#Olivia-gRPC-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://675da955-2ca4-4c76-c24f-be7a28eceb53@openai.com:443?encryption=none&security=tls&sni=all-ws.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sbgzagros.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048#Olivia-WS-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://a48b9ae0-6d71-4e03-c84e-45fac077d1c4@openai.com:443?encryption=none&security=tls&sni=all-grp.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=grpc&serviceName=lasso3&mode=gun#Olivia-gRPC-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://675da955-2ca4-4c76-c24f-be7a28eceb53@bama.ir:443?encryption=none&security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&type=ws&host=mana-c9ff40cdb8-hesam.apps.ir-thr-ba1.arvancaas.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048&sni=mana-c9ff40cdb8-hesam.apps.ir-thr-ba1.arvancaas.ir#Forooshgah-NimV.5-%F0%9F%87%AE%F0%9F%87%B7%F0%9F%87%B3%F0%9F%87%B1',
      'vless://e6f666ca-93e8-4c69-f541-5044abfac4b7@speedtest.net:443?encryption=none&security=tls&sni=speedtest.net&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&allowInsecure=1&type=ws&host=nazanin101.net&path=%2Fsineh%4085_saroon%2F%3Fed%3D8080#Olivia-Fastly-%F0%9F%87%B3%F0%9F%87%B1'
  ]],
  ["Milad-101", [
      'vless://4a92b5bd-ccf2-4bf5-86f3-151a50a0611b@cdnjs.com:443?encryption=none&security=tls&sni=all-ws.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sinasv.ir&path=%2Flasso%2F%3Fed%3D1024#Milad-WS-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://ef6c425d-b89d-4700-aea3-650223a61042@openai.com:443?encryption=none&security=tls&sni=all-grp.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=grpc&serviceName=lasso3&mode=gun#Milad-gRPC-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://9b61b66f-a332-45b9-8640-eff86a6f19a6@openai.com:443?encryption=none&security=tls&sni=all-ws.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sbgzagros.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048#Milad-WS-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://5575f28e-25f6-4f0d-fa58-7d62980a31f1@openai.com:443?encryption=none&security=tls&sni=all-grp.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=grpc&serviceName=lasso3&mode=gun#Milad-gRPC-%F0%9F%87%B3%F0%9F%87%B1',
      'trojan://HvjXVf33xI@81.28.12.12:443?security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&allowInsecure=1&type=ws&host=speedtest-gcr.zagrost.ir&path=%2FSolana_shir%40nadare%2F%3Fed%3D1024#Milad-GG-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://d511b30f-b4d2-4d3c-ba07-54137b64bf11@speedtest.net:443?encryption=none&security=tls&sni=speedtest.net&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&allowInsecure=1&type=ws&host=nazanin101.net&path=%2Fsineh%4085_saroon%2F%3Fed%3D8080#Milad-Fastly-%F0%9F%87%B3%F0%9F%87%B1'
  ]],
  ["Ahvali-300", [
      'trojan://y7pU3LCTcL@heat-shockprotein.com:443?security=tls&sni=heat-shockprotein.com&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-gcore-01.sinasv.ir&path=%2Ftroma#Ahvali-Gcore-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://a39ee463-e3c3-4cf3-9284-4804d9368a84@openai.com:443?encryption=none&security=tls&sni=all-grp-2.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=grpc&authority=&serviceName=lasso3&mode=gun#Ahvali-gRPC-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://49e1fdec-837b-40ba-8b0a-9aa60b69f2b8@openai.com:443?encryption=none&security=tls&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sinasv.ir&path=%2Flasso%2F%3Fed%3D1024#Ahvali-WS-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://0820382c-eb9a-4edd-b995-c2f922cd5eba@cdnjs.com:443?encryption=none&security=tls&sni=all-ws.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sbgzagros.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048#Ahvali-WS-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://d4338a55-0965-443b-8d25-cba2adfce984@openai.com:443?encryption=none&security=tls&sni=all-grp.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=grpc&authority=&serviceName=lasso3&mode=gun#Ahvali-gRPC-%F0%9F%87%B3%F0%9F%87%B1'
  ]],
  ["Mahdis-20", [
      'vless://e683623d-8f8b-4cf4-8b95-660a5e8fbf6d@openai.com:443?encryption=none&security=tls&sni=all-ws.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sinasv.ir&path=%2Flasso%2F%3Fed%3D1024#Mahdis-WS-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://dab5831f-1be8-4d8a-9a4a-4fb1bdf17a65@cdnjs.com:443?encryption=none&security=tls&sni=all-grp.sinasv.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=grpc&authority=&serviceName=lasso3&mode=gun#Mahdis-gRPC-%F0%9F%87%B8%F0%9F%87%AA',
      'vless://0f8fce92-8ad9-4fb4-c0f8-9d454a641ad8@openai.com:443?encryption=none&security=tls&sni=all-ws.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=ws&host=all-ws.sbgzagros.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048#Mahdis-WS-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://1302feed-40d5-4e81-8592-7af3d8570bca@openai.com:443?encryption=none&security=tls&sni=all-grp.sbgzagros.ir&alpn=h2%2Chttp%2F1.1&fp=chrome&type=grpc&authority=&serviceName=lasso3&mode=gun#Mahdis-gRPC-%F0%9F%87%B3%F0%9F%87%B1',
      'vless://0f8fce92-8ad9-4fb4-c0f8-9d454a641ad8@bama.ir:443?encryption=none&security=tls&alpn=h3%2Ch2%2Chttp%2F1.1&fp=chrome&type=ws&host=mana-c9ff40cdb8-hesam.apps.ir-thr-ba1.arvancaas.ir&path=%2Flasso%40Arezoo_tk%2F%3Fed%3D2048&sni=mana-c9ff40cdb8-hesam.apps.ir-thr-ba1.arvancaas.ir#Mahdis-NimV.5-%F0%9F%87%AE%F0%9F%87%B7%F0%9F%87%B3%F0%9F%87%B1'
  ]],

]);

// تابعی برای دریافت لینک‌ها بر اساس ارائه‌دهنده
function getLinksByProvider(provider) {
  return providerLinks.get(provider) || [];
}

// تابع اصلی برای مدیریت درخواست
async function handleRequest(request) {
  const url = new URL(request.url);
  const provider = url.searchParams.get("subs");

  // دریافت لینک‌های مربوط به ارائه‌دهنده
  let links = getLinksByProvider(provider);

  // افزودن لینک‌های عمومی به لینک‌های اختصاصی
  links = [...links, ...generalLinks];

  // تبدیل لینک‌ها به فرمت پاسخ مناسب
  const responseText = links.join('\n').trim();
  const encodedResponse = btoa(responseText);

  // بازگشت پاسخ با لینک‌های رمزگذاری شده
  return new Response(encodedResponse, {
      headers: {
          'Content-Type': 'text/plain'
      },
  });
}

// افزودن رویداد برای مدیریت درخواست‌ها
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});
