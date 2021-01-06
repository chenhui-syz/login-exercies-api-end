import mongoose from '../config/DBHelpler'
import moment from 'dayjs'

const Schema = mongoose.Schema

const SignRecordSchema = new Schema({
    uid: {
        type: String,
        ref: 'users'
    },
    created: {
        type: Date
    },
    favs: {
        type: Number
    },
})

SignRecordSchema.pre('save', function (next) {
    this.created = moment().format('YYYY-MM-DD HH:mm:ss')
    next()
})

// 定义静态方法
SignRecordSchema.statics = {
    findByUid: function (uid) {
        return this.findOne({
            uid: uid
        }).sort({
            created: -1
        })
    }
}
// 让sechma和model与mongoDB进行对应
const SignRecord = mongoose.model('sign_record', SignRecordSchema)

export default SignRecord