const Discord = require('discord.js');
const client = new Discord.Client({intents: Discord.Intents.ALL})
////const config = require('../config.json');
module.exports = {
    name : 'readme',
    execute(message, args){
        const readmeEmbed = new Discord.MessageEmbed()
            .setTitle("해당 봇을 이용하기 위한 도움말입니다")
            .setDescription("M생톤을 위해 만든 기능들(추후 TypeSript화 시킬 예정)")
            .addField(`${process.env.prefixs}(초대 or 초대코드)`, `봇을 초대할 수 있는 초대코드를 받을 수 있습니다`)
            .addField(`${process.env.prefixs}(재생 or 음원찾기, 추가) (링크 or 검색어)`, `링크 혹은 검색어를 통해 음악을 틀 수 있습니다(음성 채널 들어가야함)`)
            .addField(`${process.env.prefixs}(반복)`, `현재 재생 중인 음악을 반복 할 수 있습니다`)
            .addField(`${process.env.prefixs}(스킵 or 다음)`, `현재 재생중인 곡을 중지하고 재생목록에 있는 다음곡으로 넘어감`)     
            .addField(`${process.env.prefixs}(큐 or 목록 or 재생목록)`, `재생목록을 볼 수 있습니다`)
            .addField(`${process.env.prefixs}(나가 or 정지)`, `음악과 관련된 모든 것을 정지하고 음성 채널을 나갑니다`)
            .setFooter('호두과자#2022', `https://cdn.discordapp.com/avatars/${client.user.id}/e0021d819dce387e4809a323c1cf0d30.webp?size=128`)
        message.reply(readmeEmbed)
    }
}