import React, { useEffect } from 'react';
import { User } from '@junction/api-interfaces';
import axios from 'axios';
import '../assets/main.css';
import '../assets/profile_pic.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export const ProfilePic = (props: any) => {
  const imgSrcArr = [
    'https://lh3.googleusercontent.com/R0r4ECLz_kN94J39uyh6yNiDlfQz-XzJftxeFVR93lWEk3LPncVr_Kl4lIT6jpc0nz-2NSd6KAA2q-c4pnc5tQe9mGWuHxZDXbn-zuaw9gqmH9z1p-lwbtt8zusUaNDE3QuxZMZxYPQPwP74ITvt2u2s1cEm6-eZq_WWl4l6uXKuBj1jzyEz4L273FXMcAAynD1rjoTTEtISee-Yqb3Xh7NSGYXwV3HSaGfYGoToZ6R1Vul5UT8kVWWgfZt6UE76gMoHVaSDB5onSSLqc57wp1GVDrNedZqWqZuwuEyXhAeZ9Laeg1bUbRCKXl2uTgzFWBk-CE8BeXa_XzA51m9eVagoRgnJtG2j17M38c3SdPFzszXOSiACY3acv1m8nVbI39HUMbZgBrllsrdNvGecsuMiYrAINopFqRGPc6OjZSE8_GLTcbf_qPr6C0rDAkwSVky-vWCna-KSuEdg88j-j1qC2QGnsESVaYBtZ1MbuN0yPHPMpLumFnz1TWs7SHmKG5nT12tKObOu2yoXFfIB6Sj78irU5IpxBtaTgEdOkzkTjEmL3e5-vVlwi7I2FycyU3rfpUt8Basd2h0zJi8FH-x8ypv79Thk2fk4-0IU6_naySyqqnW_3uaLf78ukOh4GSUfrbcqPZkXhk_bsfrP6QLNSsHXAil3GhjAyYgrHH2-9yWxh7zh0h85rIpiNbFiUoZb-jDx2p1yqcyyh8wfFr67F8k61QSVkVmjHn3KPFuLR7a67XvELH7TsdI7V450lmKNVdF-CSq0772YJI8viHP4SgqL1lEzukJ9ApgGNrXGKRZsJJoA4txn_IqSlIi8OxtHOrYwRd5BhCwyfhctZ5hnVc97Ki1ap9N8JGH-zzKpquSPUPH_gzf03-t3IqZu7zub1-usxZQPxQTP4eLxsDPx4WfkFuze-0F6sz6C67yPgP3EtxXTz3d5eftceR-0izZ4PkToFzogYIgKWSgBOUhm28Wd3DKXQD9z7zBQF_BYo8C-P268eA=w141-h220-no?authuser=0',
    'https://lh3.googleusercontent.com/R0r4ECLz_kN94J39uyh6yNiDlfQz-XzJftxeFVR93lWEk3LPncVr_Kl4lIT6jpc0nz-2NSd6KAA2q-c4pnc5tQe9mGWuHxZDXbn-zuaw9gqmH9z1p-lwbtt8zusUaNDE3QuxZMZxYPQPwP74ITvt2u2s1cEm6-eZq_WWl4l6uXKuBj1jzyEz4L273FXMcAAynD1rjoTTEtISee-Yqb3Xh7NSGYXwV3HSaGfYGoToZ6R1Vul5UT8kVWWgfZt6UE76gMoHVaSDB5onSSLqc57wp1GVDrNedZqWqZuwuEyXhAeZ9Laeg1bUbRCKXl2uTgzFWBk-CE8BeXa_XzA51m9eVagoRgnJtG2j17M38c3SdPFzszXOSiACY3acv1m8nVbI39HUMbZgBrllsrdNvGecsuMiYrAINopFqRGPc6OjZSE8_GLTcbf_qPr6C0rDAkwSVky-vWCna-KSuEdg88j-j1qC2QGnsESVaYBtZ1MbuN0yPHPMpLumFnz1TWs7SHmKG5nT12tKObOu2yoXFfIB6Sj78irU5IpxBtaTgEdOkzkTjEmL3e5-vVlwi7I2FycyU3rfpUt8Basd2h0zJi8FH-x8ypv79Thk2fk4-0IU6_naySyqqnW_3uaLf78ukOh4GSUfrbcqPZkXhk_bsfrP6QLNSsHXAil3GhjAyYgrHH2-9yWxh7zh0h85rIpiNbFiUoZb-jDx2p1yqcyyh8wfFr67F8k61QSVkVmjHn3KPFuLR7a67XvELH7TsdI7V450lmKNVdF-CSq0772YJI8viHP4SgqL1lEzukJ9ApgGNrXGKRZsJJoA4txn_IqSlIi8OxtHOrYwRd5BhCwyfhctZ5hnVc97Ki1ap9N8JGH-zzKpquSPUPH_gzf03-t3IqZu7zub1-usxZQPxQTP4eLxsDPx4WfkFuze-0F6sz6C67yPgP3EtxXTz3d5eftceR-0izZ4PkToFzogYIgKWSgBOUhm28Wd3DKXQD9z7zBQF_BYo8C-P268eA=w141-h220-no?authuser=0',
    'https://lh3.googleusercontent.com/R0r4ECLz_kN94J39uyh6yNiDlfQz-XzJftxeFVR93lWEk3LPncVr_Kl4lIT6jpc0nz-2NSd6KAA2q-c4pnc5tQe9mGWuHxZDXbn-zuaw9gqmH9z1p-lwbtt8zusUaNDE3QuxZMZxYPQPwP74ITvt2u2s1cEm6-eZq_WWl4l6uXKuBj1jzyEz4L273FXMcAAynD1rjoTTEtISee-Yqb3Xh7NSGYXwV3HSaGfYGoToZ6R1Vul5UT8kVWWgfZt6UE76gMoHVaSDB5onSSLqc57wp1GVDrNedZqWqZuwuEyXhAeZ9Laeg1bUbRCKXl2uTgzFWBk-CE8BeXa_XzA51m9eVagoRgnJtG2j17M38c3SdPFzszXOSiACY3acv1m8nVbI39HUMbZgBrllsrdNvGecsuMiYrAINopFqRGPc6OjZSE8_GLTcbf_qPr6C0rDAkwSVky-vWCna-KSuEdg88j-j1qC2QGnsESVaYBtZ1MbuN0yPHPMpLumFnz1TWs7SHmKG5nT12tKObOu2yoXFfIB6Sj78irU5IpxBtaTgEdOkzkTjEmL3e5-vVlwi7I2FycyU3rfpUt8Basd2h0zJi8FH-x8ypv79Thk2fk4-0IU6_naySyqqnW_3uaLf78ukOh4GSUfrbcqPZkXhk_bsfrP6QLNSsHXAil3GhjAyYgrHH2-9yWxh7zh0h85rIpiNbFiUoZb-jDx2p1yqcyyh8wfFr67F8k61QSVkVmjHn3KPFuLR7a67XvELH7TsdI7V450lmKNVdF-CSq0772YJI8viHP4SgqL1lEzukJ9ApgGNrXGKRZsJJoA4txn_IqSlIi8OxtHOrYwRd5BhCwyfhctZ5hnVc97Ki1ap9N8JGH-zzKpquSPUPH_gzf03-t3IqZu7zub1-usxZQPxQTP4eLxsDPx4WfkFuze-0F6sz6C67yPgP3EtxXTz3d5eftceR-0izZ4PkToFzogYIgKWSgBOUhm28Wd3DKXQD9z7zBQF_BYo8C-P268eA=w141-h220-no?authuser=0',
    'https://lh3.googleusercontent.com/R0r4ECLz_kN94J39uyh6yNiDlfQz-XzJftxeFVR93lWEk3LPncVr_Kl4lIT6jpc0nz-2NSd6KAA2q-c4pnc5tQe9mGWuHxZDXbn-zuaw9gqmH9z1p-lwbtt8zusUaNDE3QuxZMZxYPQPwP74ITvt2u2s1cEm6-eZq_WWl4l6uXKuBj1jzyEz4L273FXMcAAynD1rjoTTEtISee-Yqb3Xh7NSGYXwV3HSaGfYGoToZ6R1Vul5UT8kVWWgfZt6UE76gMoHVaSDB5onSSLqc57wp1GVDrNedZqWqZuwuEyXhAeZ9Laeg1bUbRCKXl2uTgzFWBk-CE8BeXa_XzA51m9eVagoRgnJtG2j17M38c3SdPFzszXOSiACY3acv1m8nVbI39HUMbZgBrllsrdNvGecsuMiYrAINopFqRGPc6OjZSE8_GLTcbf_qPr6C0rDAkwSVky-vWCna-KSuEdg88j-j1qC2QGnsESVaYBtZ1MbuN0yPHPMpLumFnz1TWs7SHmKG5nT12tKObOu2yoXFfIB6Sj78irU5IpxBtaTgEdOkzkTjEmL3e5-vVlwi7I2FycyU3rfpUt8Basd2h0zJi8FH-x8ypv79Thk2fk4-0IU6_naySyqqnW_3uaLf78ukOh4GSUfrbcqPZkXhk_bsfrP6QLNSsHXAil3GhjAyYgrHH2-9yWxh7zh0h85rIpiNbFiUoZb-jDx2p1yqcyyh8wfFr67F8k61QSVkVmjHn3KPFuLR7a67XvELH7TsdI7V450lmKNVdF-CSq0772YJI8viHP4SgqL1lEzukJ9ApgGNrXGKRZsJJoA4txn_IqSlIi8OxtHOrYwRd5BhCwyfhctZ5hnVc97Ki1ap9N8JGH-zzKpquSPUPH_gzf03-t3IqZu7zub1-usxZQPxQTP4eLxsDPx4WfkFuze-0F6sz6C67yPgP3EtxXTz3d5eftceR-0izZ4PkToFzogYIgKWSgBOUhm28Wd3DKXQD9z7zBQF_BYo8C-P268eA=w141-h220-no?authuser=0',
  ];
  return (
    <div className="profilepic">
      <img referrerPolicy="no-referrer" src={imgSrcArr[props.id]} alt="pfp" />
    </div>
  );
};

export const PfpWrapper = (props: any) => {
  return (
    <div className="pfp-wrapper">
      <ProfilePic id="0" />
      <ProfilePic id="1" />
      <ProfilePic id="2" />
      <ProfilePic id="3" />
    </div>
  );
};

export default PfpWrapper;
