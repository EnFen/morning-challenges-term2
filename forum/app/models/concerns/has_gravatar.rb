module HasGravatar
    def gravatar
        return "http://www.gravatar.com/avatar/#{Digest::MD5.hexdigest(email)}?d=robohash"
    end
end